import getBlog from "@/lib/getBlog";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/header/Header";
import Footer from "@/components/footer";

type Params = {
    params: {
        blogId: number
    }
}

export default async function BlogPage({ params: { blogId }}: Params) {
    const blogData: any = getBlog(blogId);
    const blog = await blogData;

    console.log(">>blog", blog);
    console.log(">>blog author", blog.author);

    return (
        <div className={'bg-dark-blue overflow-x-hidden'}>
            <Head>
                <title>Blog | {blog.title.rendered}</title>
            </Head>
            <Header />
            <div className={'bg-white py-12 blog-body'}>
                <h1 className={'text-center text-black mb-8 max-w-[1200px] m-auto'}>
                {blog.title.rendered}
                </h1>
                <div className={'flex justify-center'}>
                    <span>
                        <p className={'mr-2'}>{blog.modified}</p>
                    </span>
                    <span className={'font-bold'}>{`By Diego`}</span>
                </div>
                <div className={'flex justify-center my-14'}>
                </div>
                <div className={'max-w-[1200px] md:px-0 px-4 m-auto my-4'}>
                
                </div>
            
            </div>
            <Footer />
        </div>
    )
}