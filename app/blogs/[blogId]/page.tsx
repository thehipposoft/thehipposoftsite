import Footer from "@/components/footer";
import getBlog from "@/lib/getBlog";
import Head from "next/head";
import Header from "@/components/header/Header";
import Image from "next/image";
import { Suspense } from "react";
import { Blog } from "@/src/types";

type Params = {
    params: {
        blogId: number
    }
}

export default async function BlogPage({ params: { blogId }}: Params) {
    const blogData = getBlog(blogId);
    const blog: Blog = await blogData;

    return (
        <div className={'bg-dark-blue overflow-x-hidden'}>
            <Head>
                <title>Blog | {blog.title}</title>
            </Head>
            <Header />
            <Suspense fallback={<h2>Loading...</h2>}>
                <div className={'bg-white py-12 blog-body'}>
                    <h1 className={'text-center text-black mb-8 max-w-[1200px] m-auto'}>
                        {blog.title}
                    </h1>
                    <div className={'flex justify-center'}>
                        <span>
                            <p className={'mr-2'}>
                                {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day:'numeric' })}
                            </p>
                        </span>
                        <span className={'font-bold'}>
                            {`By ${blog.author_name}`}
                        </span>
                    </div>
                    <div className={'flex justify-center my-4'}>
                        <Image
                            src={blog.image}
                            width={700}
                            height={400}
                            alt={`${blog.title} main image`}
                        />
                    </div>
                    <div className={'max-w-[1200px] md:px-0 px-4 m-auto my-4'} dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>
            </Suspense>

            <Footer />
        </div>
    )
}