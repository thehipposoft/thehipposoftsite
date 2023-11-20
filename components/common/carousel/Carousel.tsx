import React, {useRef} from "react";
import { TEAM_DATA } from './constants.js'
import Slide from "./Slide";
import { motion } from 'framer-motion';

const Carousel = () => {
    const carousel: any = useRef(null);

    const next = () => {
        //check si el carousel tiene elementos
        if (carousel && carousel.current && carousel.current.children.length > 0) {
            //obtenemos el primer elemento del carousel
            const primerElemento = carousel.current.children[0];
            //transicion para el carousel
            carousel.current.style.transition = `1000ms ease-out all`;

            const tamañoSlide = carousel.current.children[0].offsetWidth;

            //mover el carousel
            carousel.current.style.transform = `translateX(-${tamañoSlide}px)`;

            const transition = () => {
                //Se reinicia la posicion del slide
                carousel.current.style.transition = 'none';
                carousel.current.style.transform = `translateX(0)`;
                //Tomamos el primer elemento y lo mandamos al final
                carousel.current.appendChild(primerElemento);

                carousel.current.removeEventListener('transitionend', transition)
            }

            //EventListener para cuando termina la animación.
            carousel.current.addEventListener('transitionend', transition);
        }
    }

    const back = () => {
        if (carousel.current.children.length > 0) {
            //Obtenemos ultimo elemento
            const index = carousel.current.children.length - 1;
            const ultimoElemento = carousel.current.children[index];
            carousel.current.insertBefore(ultimoElemento, carousel.current.firstChild)

            carousel.current.style.transition = 'none';

            const tamañoSlide = carousel.current.children[0].offsetWidth;
            carousel.current.style.transform = `translateX(-${tamañoSlide}px)`;

            setTimeout(() => {
                carousel.current.style.transition = `1000ms ease-out all`;
                carousel.current.style.transform = `translateX(0)`;
            }, 30)
        }
    }

    return(
        <motion.div
        className='relative rounded-2xl'
        initial={{
            opacity: 0,
            x: -50,
            }}
        whileInView={{
            opacity: 1,
            x: 0,
        }}
        viewport={{ once: true }}
        transition={{duration: 1}}
        >
            <div className="">
                <div className="flex flex-nowrap justify-center items-center" ref={carousel}>
                    {
                        TEAM_DATA.map((value) => <Slide title={value.title} text={value.text} name={value.name} rol={value.rol} />)
                    }
                </div>
            </div>
            <div className="absolute top-[40%] w-full h-full z-20">
                <motion.button
                onMouseDown={back}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0}}
                transition={{duration: 0.3}}
                className='carousel-button cursor-pointer outline-none ease-in absolute bg-box-image-color rounded-full mx-2'
                >
                    <img src='/assets/images/technologies/arrowBox.svg' className='carousel-left-arrow p-2'/>
                </motion.button>
                <motion.button
                onMouseDown={next}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0}}
                transition={{duration: 0.3}}
                className='carousel-button right cursor-pointer outline-none ease-in absolute rounded-full bg-box-image-color mx-2'>
                    <img src='/assets/images/technologies/arrowBox.svg' className="carousel-right-arrow p-2"/>
                </motion.button>
            </div>
        </motion.div>
    )
}

export default Carousel;