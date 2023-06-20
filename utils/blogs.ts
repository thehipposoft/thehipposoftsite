import matter from 'gray-matter';

export function getAllBlogs() {
  if (typeof window === 'undefined') {
    // Running on the server-side during build
    const fs = require('fs');
    const filesInBlogs = fs.readdirSync('./content/blogs');
    const blogs = filesInBlogs.map((filename) => {
      const file = fs.readFileSync(`./content/blogs/${filename}`, 'utf8');
      const matterData = matter(file);

      return {
        ...matterData.data,
        slug: filename.slice(0, filename.indexOf('.'))
      };
    });

    return blogs;
  } else {
    // Running on the client-side in the browser
    return [];
  }
}