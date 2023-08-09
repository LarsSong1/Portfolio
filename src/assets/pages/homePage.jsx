import '../css/homePage.css'
import cerebro from '../img/cerebro.svg'

const HomePage = () => {
    return (
        <main className='heroSection'>
            <section className='container justify-around items-center flex mx-auto flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row sm:justify-center'>
                <div className='text-end me-20 sm:me-4 md:me-5 lg:me-10 xl:me-20 sm:mb-40 md:mb-0 lg:mb-0 xl:mb-0 z-40'>
                    <h3 className='font-light text-black text-xl sm:text-lg md:text-4xl lg:-text-4xl xl:text-4xl mb-4 fuenteHurme'>Hola soy Larson</h3>
                    <h1 className=' bg-clip-text text-2xl bg-gradient-to-b text-transparent from-violet-400 to-black sm:text-2xl md:text-4xl lg:text-7xlxl xl:text-7xl fuenteHurme font-black'>Diseñador & <br /> Desarrollador Web</h1>
                    <h4 className='text-green-800 mt-4 font-semibold fuenteCentury'>+593 96 7185 460</h4>
                    <h4 className='text-green-800 fuenteCentury font-semibold'>damianalejandrofirst@gmail.com</h4>
                </div>
                <div>
                    <img className='z-20 rounded-lg w-10 sm:w-60 md:w-auto lg:w-10/12 xl:w-11/12' src={cerebro} alt="Cerebro-Inteligencia" />
                </div>
                <ul className='absolute left-20 mt-auto mb-auto icons md:relative z-30 md:left-0 lg:absolute xl:absolute xl:left-20 lg:xl-20'>
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
                <h2 className='absolute bottom-10 left-80 text-black text-xl font-light fuenteHurme'>Convierte tu presencia en línea en algo impresionante con mi diseño web personalizado</h2>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg absolute z-40 right-40   bg-gradient-to-tl from-black via-violet-900 to-slate-300 text-white  bottom-10 fuenteHurme font-normal">Proyectos</button>
            </section>

        </main>

    )
}

export default HomePage