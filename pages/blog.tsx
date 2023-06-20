import fs from 'fs';
import matter from 'gray-matter';
import React from 'react';

export default function Blog( { blogs }: any ) {
    return (
        <div className={'flex flex-col'}>
            <h1 className={'text-center text-black w-full'}>Blogs</h1>
            <div className={'w-full bg-slate-200 flex'}>
                {
                    blogs.map((item:any) => <div>
                        <h3>{item.title}</h3>
                    </div>)
                }
            </div>
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