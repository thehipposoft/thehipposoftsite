import type { Metadata } from "next";
import Header from "@/components/header/Header";
import getAllBlogs from "@/lib/getAllBlogs";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";

export const metadata:Metadata = {
    title: 'Blogs | The Hipposoft',
}

export default async function BlogPage() {
    const blogsData: any = getAllBlogs();
    const blogs = await blogsData;

    return (
        <div className={'bg-dark-blue overflow-x-hidden'}>
            <Header />
            <div className="px-14">
                <div className="flex justify-between items-center">
                    <h2>Beyond the Horizon</h2>
                    <Link
                        className={'h-fit text-white transition-all after:content-[" "] after:block after:h-[1px] p-2 rounded-3xl after:w-full after:bg-white after:transition-all after:duration-500 after:ease-in-out hover:after:w-0 hover:bg-white hover:text-black hover:font-bold hover:transition-all hover:duration-500 hover:ease-in-out'}
                        href={'/'}
                    >
                        Back to Home
                    </Link>
                </div>
                <p className="">
                    Explore the unknown and discover new perspectives. Our blog takes you beyond the ordinary, offering insights and inspiration from the cutting edge of thought.
                </p>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
                    {
                        blogs.map((blog:any) => {
                            return (
                                <div
                                    key={blog.id}
                                    className={'py-12 w-full'}
                                >
                                    <Link href={`/blogs/${blog.id}`}>
                                        <div className={'cursor-pointer bg-white max-w-[392px] transition-all min-h-[420px] flex flex-col justify-between hover:shadow-white hover:shadow-md'}>
                                            <Image
                                                src={blog.image}
                                                alt={`${blog.title} hero image`}
                                                className={'mb-2 object-contain'}
                                                width={400}
                                                height={60}
                                            />
                                            <div className={'p-6 flex flex-col grow justify-between'}>
                                                <div>
                                                    <h4 className={'font-bold text-2xl text-dark-blue mb-3'}>
                                                        {blog.title}
                                                    </h4>
                                                    <div className={'text-dark-blue three-lines mb-3'} dangerouslySetInnerHTML={{ __html: blog.excerpt}} />
                                                </div>
                                                    <p className={'border-l-blue-700 border-l-[1px] border-solid pl-3 text-blue-700 underline'}>
                                                        Read more
                                                    </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
};