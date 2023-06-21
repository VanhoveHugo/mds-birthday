import './globals.css'

export const metadata = {
  title: 'My Digital Birthday 2023@B3',
  description: 'SEO c\'est de l\'eau !',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
