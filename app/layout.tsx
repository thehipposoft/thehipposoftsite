import '../styles/globals.scss';
import GoogleAnalytics from './GoogleAnalytics';

export const metadata = {
  title: "The Hipposoft | Let's Create",
  description: "We create to connect. We create and build digital experiences to boost your business. We want to inspire you.  ",
  openGraph: {
    title: 'The Hipposoft',
    description: 'We create to connect. We create and build digital experiences to boost your business. We want to inspire you.',
    type: 'website',
    url: 'https://www.thehipposoft.com/',
    siteName: 'The Hipposoft',
    images: [
      {
        url: 'https://www.thehipposoft.com/assets/hippo-screen.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://www.thehipposoft.com/assets/hippo-screen.png',
        width: 1800,
        height: 1600,
        alt: 'We create to connect. We create and build digital experiences to boost your business. We want to inspire you.',
      },
    ],
    locale: 'en_AU',
  }
}

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
