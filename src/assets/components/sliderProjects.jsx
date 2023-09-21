// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'
import reactLogo from '../img/react2.svg'
import html from '../img/html.svg'
import css from '../img/css.svg'
import javaScript from '../img/JavaScript.svg'
import tourByEcu from '../img/tourbyecu.svg'
import bootstrap from '../img/bootstrap.svg'
import '../css/homePage.css'
import tyresm from '../img/tyres_m.svg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const dataSwiper = [
    { titulo: 'Tyres&M', description: 'El presente proyecto fue creado para un negocio de venta de llantas y reencauche que cuenta con un sistema de contacto cliente-vendedor donde se puede visualizar todos los productos que ofrece el vendedor', tecnologias: [reactLogo, javaScript, bootstrap, css], image: tyresm, web: 'https://tyres-m.netlify.app/', github: 'https://github.com/LarsSong1/tyres-M.git'},
    { titulo: 'TourByEcu', description: 'Este proyecto es una practica de una tendencia Web conocida como glashmorphismo la cual le da un toque de elegancia al sitio.', tecnologias: [html, css, javaScript, reactLogo], image: tourByEcu, web:'https://chimborazo-tour.netlify.app/', github: 'https://github.com/LarsSong1/Chimborazo-tour.git' },


]


const SliderProjects = () => {
    return (
        <Swiper className='sliderSection mx-auto'
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            navigation={{
                nextEl: '.button-next-slide',
                prevEl: '.button-prev-slide'
            }}
            pagination={{ clickable: true }}
            speed={800}
        >
            {dataSwiper.map((item, index) => (
                <SwiperSlide key={index} className='flex justify-center items-start swiperSlideSection relative flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row mt-0 slider'>
                    <div className='swiperSlideText flex items-center flex-row sm:flex-col md:flex-col justify-center'>
                        <div className='w-full mx-auto flex flex-col items-center justify-center space-y-0 sm:space-y-0 md:space-y-20 lg:space-y-20 xl:space-y-20 sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 sm:mt-10 mt-10 md:mt-0 lg:mt-0 xl:mt-0' >
                            <h1 className='text-black text-4xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-light text-center fuenteHurmeThin mt-24'>{item.titulo}</h1>
                            <p className='text-black text-center font-light fuenteCentury '>{item.description}</p>
                            <h5 className='text-black text-center font-bold fuenteCentury text-lg'>Tecnologías</h5>
                            <div className='flex flex-grow justify-center gap-8'>
                                <img src={item.tecnologias[0]} alt="logo" loading='lazy' />
                                <img src={item.tecnologias[1]} alt="logo" loading='lazy' />
                                <img src={item.tecnologias[2]} alt="logo" loading='lazy' />
                                <img src={item.tecnologias[3]} alt='logo' loading='lazy' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-black relative flex justify-center items-center swiperSlideImage top-0 z-10 sm:flex-col'>
                        <div className='flex items-center justify-center contenedorImage'>
                            <div className="flex w-full absolute projectButtons">
                                <div className="grid flex-grow card rounded-lg bg-white place-items-center">
                                    <a href={item.web} rel='noreferrer' target='_blank'>
                                        <span className='text-6xl'>
                                            <ion-icon name="eye-outline"></ion-icon>
                                        </span>
                                    </a>
                                </div>
                                <div className="divider text-white font-bold fuenteHurme lg:divider-horizontal">OR</div>
                                <div className="grid flex-grow card bg-white rounded-lg place-items-center">
                                    <a href={item.github} rel='noreferrer' target='_blank'>
                                        <span className='text-6xl'>
                                            <ion-icon name="logo-github"></ion-icon>

                                        </span>
                                    </a>
                                </div>
                            </div>
                            <img src={item.image} alt="Demostración Portfolio" loading='lazy' className='p-4 sm:p-4 md:p-10 lg:p-20 xl:p-20' />
                        </div>
                        <div className='absolute flex  bottom-5 z-50 sm:bottom-20 lg:left-0 xl:left-0 lg:-bottom-20 xl:-bottom-20 '>
                            <div className='button-prev-slide'>
                                <ion-icon name="arrow-back-circle-outline"></ion-icon>
                            </div>
                            <div className='button-next-slide '>
                                <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}


            {/* ... */}
        </Swiper>
    );
};

export default SliderProjects;