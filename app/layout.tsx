export const metadata = {
  title: 'The Hipposoft project',
  description: "Let's Create",
}
import '../styles/globals.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
