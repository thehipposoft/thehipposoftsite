import Tile from "./tile";

const BRAND = [
    {
        image: '/assets/images/us/us-brand1.png',
        text: 'We design the logo and give identity to your brand.',
    },
    {
        image: '/assets/images/us/us-brand2.png',
        text: 'We position it in the market with a solid concept, according to the values and goals of your company.',
    },
    {
        image: '/assets/images/us/us-brand3.png',
        text: 'We standardize the diffusion of your brand for a correct use and application, through a manual of use.',
    },
    {
        image: '/assets/images/us/us-brand3.png',
        text: 'A good web design will attract more customers, a good experience on your site will make them stay.',
    },
    {
        image: '/assets/images/us/us-brand3.png',
        text: 'We design responsive sites according to the needs of each client and we design it with the latest tools so you can test it before it goes to market.',
    },
    {
        image: '/assets/images/us/us-brand3.png',
        text: 'We design brands that inspire and last. We create websites that will make you grow.',
    },
];

const DEV = [
    {
        image: '/assets/images/us/us-web1.png',
        text: 'We offer flexible, scalable and innovative products with the best possible performance that are unique and fully customized.',
    },
    {
        image: '/assets/images/us/us-web2.png',
        text: 'Our sites are responsive and prepared to adapt to different devices and all search engines.',
    },
    {
        image: '/assets/images/us/us-brand2.png',
        text: 'Part of our challenge and motivation is to work with projects aligned to our values in order to create and grow together.',
    },
    {
        image: '/assets/images/us/us-dev4.png',
        text: 'Technologies: React.js, Next.js, WordPress, Node.js. Netlify. AWS.',
    },
]


const SEO = [
    {
        image: '/assets/images/us/us-seo1.png',
        text: 'We provide the client  a fully customized integral plan according to the context and their needs.',
    },
    {
        image: '/assets/images/us/us-brand2.png',
        text: 'We optimize the visibility and positioning of your website in search engines to increase traffic and achieve more sales of your product/service.',
    },
    {
        image: '/assets/images/us/us-seo3.png',
        text: 'We use BI tools to be able to control the traffic of the platform that our client chooses, in order to have greater certainty to be able to corroborate the implemented strategies.        ',
    },
];

const US_DATA = [
    {
        id: 1,
        section: 'Brand',
        withPagination: BRAND,
        content: <div className='w-full md:flex'>
                    <div className="md:w-[45%] md:pt-16 py-12 md:py-0">
                        <Tile 
                            title={'Brand Design'} 
                            text1={BRAND[0].text} img1={BRAND[0].image}
                            text2={BRAND[1].text} img2={BRAND[1].image}
                            text3={BRAND[2].text} img3={BRAND[2].image}
                        />
                    </div>
                    <div className="md:grid grid-cols-2 grid-rows-2 bg-black hidden">
                        <img src="/assets/images/us/us-design.png" alt="" className="md:w-[330px] md:h-[290px] opacity-60 hover:opacity-100 duration-500 ease-in-out" />
                        <img src="/assets/images/us/brand-2.png" alt="" className="md:w-[330px] md:h-[290px] opacity-60 hover:opacity-100 duration-500 ease-in-out" />
                        <img src="/assets/images/us/brand-3.png" alt="" className="md:w-[330px] md:h-[290px] opacity-60 hover:opacity-100 duration-500 ease-in-out" />
                        <img src="/assets/images/us/brand-4.png" alt="" className="md:w-[330px] md:h-[290px] opacity-60 hover:opacity-100 duration-500 ease-in-out" />
                    </div>
                </div>,
        secondPageContent: <div className='w-full md:flex'>
        <div className="md:w-[45%] md:pt-16 py-12 md:py-0">
            <Tile 
                title={'Web Design'} 
                text1={BRAND[3].text} img1={DEV[0].image}
                text2={BRAND[4].text} img2={DEV[1].image}
                text3={BRAND[5].text} img3={DEV[2].image}
            />
        </div>
        <div className="md:grid grid-cols-2 grid-rows-2 bg-black hidden">
            <img src="/assets/images/us/web-1.png" alt="" className="md:w-[330px] md:h-[290px] opacity-60 hover:opacity-100 duration-500 ease-in-out" />
            <img src="/assets/images/us/web-2.png" alt="" className="md:w-[330px] md:h-[290px] opacity-60 hover:opacity-100 duration-500 ease-in-out" />
            <img src="/assets/images/us/web-3.png" alt="" className="md:w-[330px] md:h-[290px] opacity-60 hover:opacity-100 duration-500 ease-in-out" />
            <img src="/assets/images/us/web-4.png" alt="" className="md:w-[330px] md:h-[290px] opacity-60 hover:opacity-100 duration-500 ease-in-out" />
        </div>
    </div>,
    },
    {
        id: 2,
        section: 'Development',
        content: <div className='w-full md:flex'>
                    <div className="md:w-[45%] md:pt-16 py-12 md:py-0">
                        <Tile 
                            title={'Web Development'} 
                            text1={DEV[0].text} img1={DEV[0].image}
                            text2={DEV[1].text} img2={DEV[1].image}
                            text3={DEV[2].text} img3={DEV[2].image}
                            text4={DEV[3].text} img4={DEV[3].image}
                        />
                    </div>
                    <div className="md:grid grid-cols-2 grid-rows-2 bg-black hidden">
                        <img src="/assets/images/us/dev-1.png" alt="" className="md:w-[330px] md:h-[290px] opacity-60 hover:opacity-100 duration-500 ease-in-out" />
                        <img src="/assets/images/us/dev-2.png" alt="" className="md:w-[330px] md:h-[290px] opacity-60 hover:opacity-100 duration-500 ease-in-out" />
                        <img src="/assets/images/us/dev-3.png" alt="" className="md:w-[330px] md:h-[290px] opacity-60 hover:opacity-100 duration-500 ease-in-out" />
                        <img src="/assets/images/us/dev-4.png" alt="" className="md:w-[330px] md:h-[290px] opacity-60 hover:opacity-100 duration-500 ease-in-out" />
                    </div>
                </div>,
    },
    {
        id: 3,
        section: 'Seo',
        content: <div className='w-full md:flex'>
                    <div className="md:w-[45%] md:pt-16 py-12 md:py-0">
                        <Tile 
                            title={'SEO and positioning'} 
                            text1={SEO[0].text} img1={SEO[0].image}
                            text2={SEO[1].text} img2={SEO[1].image}
                            text3={SEO[2].text} img3={SEO[2].image}
                        />
                    </div>
                    <div className="md:grid grid-cols-2 grid-rows-2 bg-black hidden">
                        <img src="/assets/images/us/seo-1.png" alt="" className="md:w-[330px] md:h-[290px] opacity-60 hover:opacity-100 duration-500 ease-in-out" />
                        <img src="/assets/images/us/seo-2.png" alt="" className="md:w-[330px] md:h-[290px] opacity-60 hover:opacity-100 duration-500 ease-in-out" />
                        <img src="/assets/images/us/seo-3.png" alt="" className="md:w-[330px] md:h-[290px] opacity-60 hover:opacity-100 duration-500 ease-in-out" />
                        <img src="/assets/images/us/seo-4.png" alt="" className="md:w-[330px] md:h-[290px] opacity-60 hover:opacity-100 duration-500 ease-in-out" />
                    </div>
                </div>,
    },
]


export { US_DATA };