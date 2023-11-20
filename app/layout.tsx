export const metadata = {
  title: "The Hipposoft | Let's Create",
  description: "We create to connect. We create and build digital experiences to boost your business. We want to inspire you.  ",
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
