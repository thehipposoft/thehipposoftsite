import Head from 'next/head'
//styles
import '../styles/globals.scss';
import styles from '../styles/Home.module.scss';
//components
import Banner from '../components/banner/Banner';
import Value from '../components/values';
import Us from '../components/us';
import Contact from '../components/contact';
import Projects from '../components/proyects';
import Footer from '../components/footer';

export default function Home() {
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
                <Contact />
            </main>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}