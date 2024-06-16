//styles
import '../styles/globals.scss';
//components
import Banner from '../components/banner/Banner';
import Blogs from '@/components/blog';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Projects from '../components/projects';
import Us from '../components/us';
import Value from '../components/values';

export const metadata = {
    title: "The Hipposoft | Let's Create",
    description: "We create to connect. We create and build digital experiences to boost your business. We want to inspire you.",
    metadataBase: "https://www.thehipposoft.com/",
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

export default async function Home() {
    return (
        <div>
            <main className={`relative overflow-hidden`}>
                <Banner />
                <Value />
                <Us />
                <Projects />
                <Blogs />
                <Contact />
            </main>

            <footer className={`bg-[#021627] pb-[2%] flex flex-col justify-end relative`}>
                <Footer />
            </footer>
        </div>
    )
}