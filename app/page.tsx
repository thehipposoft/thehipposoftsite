import Head from 'next/head'
//styles
import '../styles/globals.scss';
import styles from '../styles/Home.module.scss';
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
            <Head>
                <title>HippoSoft | Let's Create</title>
                <meta name="description" content="Let's Create" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} relative overflow-hidden`}>
                <Banner />
                <Value />
                <Us />
                <Projects />
                <Blogs />
                <Contact />
            </main>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}