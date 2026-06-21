import fs from 'node:fs/promises'
import path from 'node:path'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const isProd = process.env.NODE_ENV === 'production'
const port = Number(process.env.PORT) || 5173
const base = process.env.BASE || '/'

async function createServer() {
  const app = express()

  let vite: Awaited<ReturnType<typeof createViteServer>> | undefined

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
      base,
    })

    app.use(vite.middlewares)
  } else {
    app.use(base, express.static(path.resolve('dist/client'), { index: false }))
  }

  app.use(/(.*)/, async (req, res) => {
    try {
      const url = req.originalUrl.replace(base, '/')

      let template: string
      let render: () => Promise<{ html: string }>

      if (!isProd && vite) {
        template = await fs.readFile(path.resolve('index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)

        const serverEntry = await vite.ssrLoadModule('/src/entry-server.ts')
        render = serverEntry.render
      } else {
        template = await fs.readFile(path.resolve('dist/client/index.html'), 'utf-8')
        const serverEntryPath = path.resolve('dist/server/entry-server.js')
        const serverEntry = await import(serverEntryPath)
        render = serverEntry.render
      }

      const rendered = await render()

      const html = template.replace('<!--ssr-outlet-->', rendered.html)

      res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
    } catch (error) {
      vite?.ssrFixStacktrace(error as Error)
      console.error(error)
      res.status(500).end((error as Error).message)
    }
  })

  app.listen(port, () => {
    console.log(`SSR server running at http://localhost:${port}`)
  })
}

createServer()
