import type { Metadata } from "next";
import getAllBlogs from "@/lib/getAllBlogs";
import Link from "next/link";

export const metadata:Metadata = {
    title: 'Blog',
}

export default async function BlogPage() {
    //const blogsData: Promise<> = getAllBlogs(); TODO: Add correct Type
    const blogsData: any = getAllBlogs();    
    const blogs = await blogsData;
    const publishedBlogs = blogs.filter((b: any) => b.status === 'publish');

    return (
        <div>
            <h2>Blog page</h2>
            <h2>
                <Link href={'//'}>Back to Home</Link>
            </h2>
            {
                publishedBlogs.map((pb:any) => {
                    console.log(">>pb", pb);
                    return (
                        <div className={pb.id}>
                            <h3>{pb.title.rendered}</h3>
                        </div>
                    )
                }
                    
                )
            }
        </div>
    )
};