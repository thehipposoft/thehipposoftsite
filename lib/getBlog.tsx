export default async function getBlog(blogId: number) {
    const res = await fetch(`https://admin.thehipposoft.com/wp-json/wp/v2/posts/${blogId}`);

    if(!res.ok) throw new Error('Failed to fetch user');

    return res.json();
}