import '../styles/globals.scss';
import GoogleAnalytics from './GoogleAnalytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body>{children}</body>
    </html>
  )
}
