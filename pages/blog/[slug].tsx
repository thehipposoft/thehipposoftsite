import React from 'react';
import Image from 'next/image';
import fs from 'fs';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import Head from 'next/head';
import Header from '../../components/header/Header';
import Footer from '../../components/footer';

export default function Blog({ frontmatter, markdown}: any) {
  return (
    <div className={'bg-dark-blue overflow-x-hidden'}>
      <Head>
        <title>Blog | {frontmatter.title}</title>
      </Head>
      <Header />
      <div className={'bg-white py-12 blog-body'}>
        <h1 className={'text-center text-black'}>{frontmatter.title}</h1>
        <div className={'flex justify-center'}>
          <span>
            <p className={'mr-2'}>{frontmatter.date}</p>
          </span>
          <span className={'font-bold'}>{`By ${frontmatter.author}`}</span>
        </div>
        <div className={'flex justify-center my-14'}>
          <Image
            src={frontmatter.image}
            alt={`${frontmatter.title} hero image`}
            width={1280}
            height={510}
          />
        </div>
        <div className={'max-w-[1200px] px-4 m-auto my-4'}>
          <ReactMarkdown>
            {markdown}
          </ReactMarkdown>
        </div>
       
      </div>
      <Footer></Footer>
    </div>
  )
}

export async function getStaticProps({ params: { slug } }: any) {
  const fileContent = matter(fs.readFileSync(`./content/blogs/${slug}.md`, 'utf8'))
  let frontmatter = fileContent.data
  const markdown = fileContent.content

  return {
    props: { frontmatter, markdown }
  }
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync('./content/blogs')

  const paths = filesInProjects.map(file => {
    const filename = file.slice(0, file.indexOf('.'))
    return { params: { slug: filename }}
  })

  return {
    paths,
    fallback: false // This shows a 404 page if the page is not found
  }
}