export default async function getAllBlogs()  {
    const res = await fetch('https://admin.thehipposoft.com/wp-json/wp/v2/posts/');
    
    if(!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}