// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'
import reactLogo from '../img/react2.svg'
import html from '../img/html.svg'
import css from '../img/css.svg'
import javaScript from '../img/JavaScript.svg'
import tourByEcu from '../img/tourbyecu.svg'
import django2 from '../img/django2.svg'
import bootstrap from '../img/bootstrap.svg'
import '../css/homePage.css'
import { IoArrowForwardCircle, IoArrowBackCircleSharp } from "react-icons/io5";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const dataSwiper = [
    { titulo: 'TourByEcu', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at quam in dolor efficitur feugiat. Integer tempor ante urna, eu sollicitudin dolor consectetur sit amet. Morbi sed nisi ut', tecnologias: [html, css, javaScript, reactLogo], image: tourByEcu },
    { titulo: 'Funzer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at quam in dolor efficitur feugiat. Integer tempor ante urna, eu sollicitudin dolor consectetur sit amet. Morbi sed nisi ut', tecnologias: [django2, reactLogo, javaScript, bootstrap] }

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
            pagination={{clickable: true}}

        >
            {dataSwiper.map((item, index) => (
                <SwiperSlide key={index} className='flex justify-center items-start swiperSlideSection relative'>
                    <div className='swiperSlideText flex items-center'>
                        <div className='w-7/12 mx-auto flex flex-col items-center justify-center space-y-20'>
                            <h1 className='text-black text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-light text-center fuenteHurme '>{item.titulo}</h1>
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
                    <div className='bg-black relative flex justify-center items-center swiperSlideImage top-0 z-10'>
                        <img src={item.image} alt="Demostración Portfolio" loading='lazy' className='p-20' />
                        <div className='absolute flex left-0 -bottom-20 z-50'>
                            <div className='button-prev-slide'>
                                <IoArrowBackCircleSharp color='black' size={'3em'} />
                            </div>
                            <div className='button-next-slide '>
                                <IoArrowForwardCircle color='black' size={'3em'} />
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