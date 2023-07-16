import React from 'react';
import BlogsCarousel from '../common/BlogsCarousel';

const Blogs = ({ blogs }) => {
  return (
      <div className={'flex bg-dark-blue'}>
        <div className={'flex bg-dark-blue max-w-[1200px] w-full md:mx-auto py-24 justify-between flex-wrap items-center'}>
          <div className={'md:w-2/6 text-center md:text-left w-full'}>
              <h1 className={'mb-2 leading-[4.2rem]'}>Latest Post</h1>
              <p>This is what we want to share we you</p>
              <p>Check them out!</p>
          </div>
          <div className={'md:w-4/6 px-9 blogs-carousel'}>
            <BlogsCarousel blogs={blogs} />
          </div>
        </div>
      </div>
  )
};

export default Blogs;