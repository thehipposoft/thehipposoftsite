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