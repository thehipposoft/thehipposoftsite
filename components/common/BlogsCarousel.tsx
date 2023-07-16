import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BlogsCarousel = ({ blogs }:any) => {
    const settings = {
        infinite: false,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ],
    };

    return (
        <>
        {/* 
            // @ts-ignore */}
        <Slider {...settings}>
            {blogs && blogs.map((blog: any, index: number) => (
            <div 
                key={index}
                className={`px-6 py-12 `}
                style={{ width: 100 }}
            >
                <div className={'bg-white max-w-[392px] blog-tile transition-all h-[420px] flex flex-col justify-between'}>
                    <img 
                        src={blog.frontmatter.image} 
                        alt={`${blog.frontmatter.title} hero image`}
                        className={'mb-2 object-contain max-[200px]'}
                    />
                    <div className={'p-6 flex flex-col grow justify-between'}>
                        <div>
                            <h4 className={'font-bold text-2xl text-dark-blue mb-3'}>
                                {blog.frontmatter.title}
                            </h4>
                            <p className={'text-dark-blue three-lines mb-3'}>
                                {blog.markdown}
                            </p>
                        </div>
                        <a className={''} href={`/blog/${blog.slug}`}>
                            <p className={'border-l-blue-700 border-l-[1px] border-solid pl-3 text-blue-700 underline'}>
                                Read more
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            ))}
        </Slider>
        </>
    );
};

export default BlogsCarousel;