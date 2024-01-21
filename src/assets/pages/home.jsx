import '../css/home.css'
import cerebro from '../img/cerebro.webp'



function Home() {
    return (
        < >
            <section className='hero-Section grid  place-items-center h-screen w-screen sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 lg:grid-cols-1'>
                <div className='text-center lg:ms-10 xl:ms-32 md:mb-0 lg:mb-0 xl:mb-0 z-40 sm:text-center md:text-center  xl:text-end  mt-10 sm:mt-10 md:mt-0 lg:mt-0 xl:mt-0 sm:mb-20 lg:text-center'>
                    <h3 className='text-blend font-normal text-xl sm:text-lg md:text-2xl lg:-text-4xl xl:text-4xl mb-4 fuenteHurmeThin z-20'>Hola soy Larson</h3>
                    <h1 className={`text-blendGradient bg-clip-text text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl fuenteHurme bg-gradient-to-b text-transparent from-violet-400 to-black whitespace-nowrap`}>Diseñador & <br /> Desarrollador Web</h1>
                    <h4 className='bg-gradient-to-b text-transparent from-green-700 to-black  mt-4 font-semibold fuenteCentury text-blendGradient bg-clip-text'>+593 96 7185 460</h4>
                    <h4 className='bg-gradient-to-b text-transparent from-green-700 to-black fuenteCentury font-semibold text-blendGradient bg-clip-text'>damianalejandrofirst@gmail.com</h4>
                </div>
                <div className='z-20'>
                    <img className='z-20 rounded-lg  sm:w-1/3 md:w-2/6 lg:w-4/5 xl:w-8/12 mx-auto   ' src={cerebro} alt="Cerebro-Inteligencia" />
                </div>
                <ul className='absolute left-20 mt-auto mb-auto icons md:relative z-30 md:left-5 lg:absolute xl:absolute xl:left-10 lg:xl-20 sm:left-7 sm:absolute'>
                    <li>
                        <a href="">
                            <ion-icon name="logo-instagram"

                            ></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/larsong/" target='_blank' rel='noreferrer'>
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/5930967470880?text= Hola, estoy buscando un desarrollador web para crear un sitio para mi negocio. ¿Puedes ayudarme? o brindarme información por favor, dime cómo podemos contactarnos y discutir más detalles. ¡Gracias!" rel='noreferrer' target='_blank'>
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </a>
                    </li>
                </ul>

                <a href='#proyectos' className="btn btn-md sm:btn-md md:btn-md lg:btn-lg relative z-40 right-0   bg-gradient-to-tl from-black via-violet-900 to-slate-300 text-white  bottom-10 fuenteHurmeThin font-normal sm:relative md:absolute lg:absolute xl:absolute xl:right-40 lg:right-40 ">Proyectos</a>

            </section>
        </>
    )
}

export default Home