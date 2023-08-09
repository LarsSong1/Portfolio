import '../css/homePage.css'
import cerebro from '../img/cerebro.svg'

const HomePage = () => {
    return (
        <main className='heroSection'>
            <section className='container justify-around items-center flex mx-auto'>
                <div className='text-end ms-80 sm:ms-0 '>
                    <h3 className='font-light text-black text-4xl sm:text-xl md:text-4xl lg:-text-4xl xl:text-4xl mb-4'>Hola soy Larson</h3>
                    <h1 className='font-bold bg-clip-text text-6xl bg-gradient-to-b text-transparent from-violet-400 to-black sm:text-2xl md:text-6xl lg:text-6xl xl:text-6xl'>Diseñador & <br /> Desarrollador Web</h1>
                    <h4 className='text-green-800 mt-4 font-medium'>+593 96 7185 460</h4>
                    <h4 className='text-green-800 font-medium'>damianalejandrofirst@gmail.com</h4>
                </div>
                <div>
                    <img className='z-20 rounded-lg sm:w-60 md:w-auto' src={cerebro} alt="Cerebro-Inteligencia" />
                </div>
            </section>
        </main>

    )
}

export default HomePage