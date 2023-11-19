export default async function getBlog(blogId: number) {
    const res = await fetch(`https://admin.thehipposoft.com/wp-json/wp/v2/posts/${blogId}?acf_format=standard`);
    const post = await res.json();

    const result = {
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        date: post.date,
        content: post.content.rendered,
        link: post.link,
        image: post.jetpack_featured_media_url,
        author_name: post.acf.author_name,
        excerpt: post.excerpt.rendered
    };

    if(!res.ok) throw new Error('Failed to fetch post');

    return result;
}