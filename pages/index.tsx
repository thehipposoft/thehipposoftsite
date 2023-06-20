import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
//styles
import styles from '../styles/Home.module.scss';
//components
import Banner from '../components/banner/Banner';
import Value from '../components/values';
import Us from '../components/us';
import Contact from '../components/contact';
import Projects from '../components/proyects';
import Footer from '../components/footer';
//import BlogsCarousel from '../components/blog/BlogCarousel';

export default function Home() {
    return (
        <div className={styles.container}>
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


export async function getStaticProps() {
    // List of files in blogs folder
    const filesInBlogs = fs.readdirSync('./content/blogs')
  
    // Get the front matter and slug (the filename without .md) of all files
    const blogs = filesInBlogs.map(filename => {
      const file = fs.readFileSync(`./content/blogs/${filename}`, 'utf8')
      const matterData = matter(file)
  
      return {
        ...matterData.data, // matterData.data contains front matter
        slug: filename.slice(0, filename.indexOf('.'))
      }
    })
  
    return {
      props: {
        blogs
      }
    }
}