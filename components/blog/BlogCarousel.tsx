import React from 'react';
import { getAllBlogs } from '../../utils/blogs';

export default async function BlogsCarousel() {
    return (
        <div>
            <h1>Staging</h1>
        </div>
    )
    //console.log(">>getAllBlogs", getAllBlogs())
    /*
    return (
        <div className={'my-10 bg-dark-blue'}>
            <h3>Blog</h3>
            {
                getAllBlogs().map((item, index) => {
                    return (
                        <h1>{item.title}</h1>
                    )
                })
            }
        </div>
    )*/
}
   /*
export async function getStaticProps() {
 
  const blogs = getAllBlogs();
    console.log(">>blogs", blogs)
  return {
    props: {
      blogs
    }
  };
}
*/