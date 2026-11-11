export interface Certification {
  period: string
  title: string
  issuer: { name: string; url: string }
  desc: string
  tags: string[]
  verifyUrl?: string
}

export const certificationData: Certification[] = [
  {
    period: 'Novembre 2026',
    title: 'Angular Mid-Level Developer (Level 2)',
    issuer: { name: 'certificates.dev', url: 'https://certificates.dev' },
    desc: "Certification de niveau intermédiaire validant la maîtrise d'Angular : composants, TypeScript, RxJS, formulaires, routing et bonnes pratiques d'architecture.",
    tags: ['Angular', 'TypeScript', 'RxJS'],
    // verifyUrl: 'https://…', // à renseigner avec le lien de vérification du certificat
  },
]
