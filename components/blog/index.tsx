import React from 'react';
import getAllBlogs from '@/lib/getAllBlogs';
import { Blog } from '@/src/types';
import Blogs from './BlogCarousel';

const BlogWrapper = async () => {
  const blogsData: Blog[] = await getAllBlogs();

  return (
      <Blogs blogsData={blogsData}  />
  )
};

export default BlogWrapper;