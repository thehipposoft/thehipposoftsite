export default async function getAllBlogs()  {
    const res = await fetch('https://admin.thehipposoft.com/wp-json/wp/v2/posts?acf_format=standard');
    const resolved = await res.json();

    const result = resolved.map((post: any) => {
        if (post.status === 'publish') {
            return (
                {
                    id: post.id,
                    title: post.title.rendered,
                    slug: post.slug,
                    date: post.date,
                    content: post.content.rendered,
                    link: post.link,
                    image: post.jetpack_featured_media_url,
                    author_name: post.acf.author_name,
                    excerpt: post.excerpt.rendered
                }
            )
        }
    });

    if(!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return result;
}