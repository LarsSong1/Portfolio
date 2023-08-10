
import '../css/homePage.css'
import cerebro from '../img/cerebro.svg'



const HomePage = () => {


   
    return (
        <main className='heroSection'>
            <section className='container justify-around items-center flex mx-auto flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row sm:justify-center'>
                <div className='text-center me-0 lg:me-10 xl:me-20 md:mb-0 lg:mb-0 xl:mb-0 z-40 sm:text-center md:text-end lg:text-end xl:text-end sm:me-0  md:me-0 mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 sm:mb-20'>
                    <h3 className='text-blend font-normal text-xl sm:text-lg md:text-2xl lg:-text-4xl xl:text-4xl mb-4 fuenteHurme z-20'>Hola soy Larson</h3>
                    <h1 className={`text-blendGradient bg-clip-text text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl fuenteHurme bg-gradient-to-b text-transparent from-violet-400 to-black `}>Diseñador & <br /> Desarrollador Web</h1>
                    <h4 className='text-green-800 mt-4 font-semibold fuenteCentury'>+593 96 7185 460</h4>
                    <h4 className='text-green-800 fuenteCentury font-semibold'>damianalejandrofirst@gmail.com</h4>
                </div>
                <div>
                    <img className='z-20 rounded-lg w-1/3 sm:w-1/3 md:w-2/3 lg:w-10/12 xl:w-11/12 mx-auto ' src={cerebro} alt="Cerebro-Inteligencia" />
                </div>
                <ul className='absolute left-20 mt-auto mb-auto icons md:relative z-30 md:left-0 lg:absolute xl:absolute xl:left-40 lg:xl-20 sm:absolute'>
                    <li>
                        <a href="">
                            <ion-icon name="logo-instagram"

                            ></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </a>
                    </li>
                </ul>
                <h2 className='relative bottom-10
                md:-translate-x-40 md:w-80 w-80 xl:w-full lg:w-60 sm:w-full 
                translate-x-0 sm:translate-x-0
                text-xl font-light fuenteHurme sm:relative md:absolute lg:absolute xl:absolute text-center sm:mt-20 z-40 text-blendBottom sm:mb-10 md:mb-20 mb-20 lg:mb-20 xl:mb-0 '>Convierte tu presencia en línea en algo impresionante con mi diseño web personalizado</h2>
                <a className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg relative z-40 right-0   bg-gradient-to-tl from-black via-violet-900 to-slate-300 text-white  bottom-10 fuenteHurme font-normal sm:relative md:absolute lg:absolute xl:absolute xl:right-40 lg:right-40">Proyectos</a>
            </section>

        </main>

    )
}

export default HomePage