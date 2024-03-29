
import '../css/homePage.css'
import cerebro from '../img/cerebro.webp'
import react from '../img/react.svg'
import django from '../img/django.svg'
import SliderProjects from '../components/sliderProjects'
import flet from '../img/flet.svg'
import figma from '../img/figma.svg'
import rn from '../img/reactnative.svg'
import CardSkill from '../components/cardSkill'







const HomePage = () => {

    return (
        <main className='heroSection'>
            <section className='container justify-around items-center flex mx-auto flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row sm:justify-center'>
                <div className='text-center lg:ms-10 xl:ms-320 md:mb-0 lg:mb-0 xl:mb-0 z-40 sm:text-center md:text-end lg:text-end xl:text-end  mt-10 sm:mt-10 md:mt-0 lg:mt-0 xl:mt-0 sm:mb-20 '>
                    <h3 className='text-blend font-normal text-xl sm:text-lg md:text-2xl lg:-text-4xl xl:text-4xl mb-4 fuenteHurmeThin z-20'>Hola soy Larson</h3>
                    <h1 className={`text-blendGradient bg-clip-text text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl fuenteHurme bg-gradient-to-b text-transparent from-violet-400 to-black whitespace-nowrap`}>Diseñador & <br /> Desarrollador Web</h1>
                    <h4 className='bg-gradient-to-b text-transparent from-green-700 to-black  mt-4 font-semibold fuenteCentury text-blendGradient bg-clip-text'>+593 96 7185 460</h4>
                    <h4 className='bg-gradient-to-b text-transparent from-green-700 to-black fuenteCentury font-semibold text-blendGradient bg-clip-text'>damianalejandrofirst@gmail.com</h4>
                </div>
                <div>
                    <img className='z-20 rounded-lg w-1/3 sm:w-1/3 md:w-2/3 lg:w-6/12 xl:w-8/12 mx-auto  ' src={cerebro} alt="Cerebro-Inteligencia" />
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
                <h2 className='relative bottom-10
                md:-translate-x-40 md:w-80 w-80 xl:w-full lg:w-60 sm:w-full 
                translate-x-0 sm:translate-x-0
                text-xl font-light fuenteCentury sm:relative md:absolute lg:absolute xl:absolute text-center sm:mt-20 z-40 text-blendBottom sm:mb-10 md:mb-20 mb-20 lg:mb-20 xl:mb-0 '>Convierte tu presencia en línea en algo impresionante con mi diseño web personalizado</h2>
                <a href='#proyectos' className="btn btn-md  sm:btn-md md:btn-md lg:btn-lg relative z-40 right-0   bg-gradient-to-tl from-black via-violet-900 to-slate-300 text-white  bottom-10 fuenteHurmeThin font-normal sm:relative md:absolute lg:absolute xl:absolute xl:right-40 lg:right-40">Proyectos</a>
            </section>
            <section className='designWeb relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 '>
                <div className='white-box flex flex-grow flex-col justify-start sm:top-0 md:justify-end lg:justify-end xl:justify-end '>
                    <div className='mini-box relative left-0 top-10 sm:top-10 md:top-0 lg:top-10 lg:left-0 xl:top-52 md:left-0 sm:left-0 xl:left-24 rounded-sm flex flex-col justify-center items-center pe-0 ps-0 xl:pe-10 2xl:pe-10 xl:ms-20 2xl:ms-28 sm:relative md:relative lg:absolute xl:absolute mb-20 sm:mb-20 md:mb-0 lg:mb-0 xl:mb-0'>
                        <h1 className='text-center text-black text-2xl font-normal  sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl fuenteHurmeThin mb-8'>Mi perfil como <br /> Diseñador <br /> <strong>Web</strong></h1>
                        <h2 className='text-center text-black fuenteCentury'>Descubre quien esta detras de la <br /> pantalla y mis habilidades como <br /> Freelancer</h2> 
                    </div>
                    <div className='relative text-end pe-10 mb-5 w-full'>
                        <h5 className='text-black font-bold fuenteHurme'>Diseño</h5>
                        <hr className='border-black opacity-30 ms-5 border-t-2 my-4' />
                        <ul className='flex justify-end gap-2 mt-2 design-Links'>
                            <li>
                                <a href="" className='opacity-70'>
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="" className='opacity-70'>
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='middle-box lg:hidden hidden xl:block 2xl:block'>
                </div>
                <div className='dark-box flex flex-col items-center relative'>
                    <div className='w-auto relative xl:ps-20 pe-10 ps-10 top-20 md:ps-10 md:pe-10 xl:pe-20 sm:top-20 md:top-40 lg:top-40 xl:top-40'>
                        <h5 className='font-extrabold text-left mb-5 text-white'>Web</h5>
                        <p className='text-justify mb-5 text-white'>He trabajado con diversas tecnologias y lenguajes de programación. En particular tengo experiencia en el uso de React y Django para el desarrollo de aplicaciones webs modernas y escalables</p>

                        <CardSkill img={django} alt="django-image" skillInfo={"Django"} skillDescription={"Aplicaciones Webs"} />

                        <CardSkill img={react} alt={"react-image"} skillInfo={"React"} skillDescription={"Front-End"} />
                        <CardSkill img={rn} alt={"react-native-image"} skillInfo={"React Native"} skillDescription={"Aplicaciones Móviles"} />
                        <CardSkill img={flet} alt={"flet-image"} skillInfo={"Flet"} skillDescription={"Aplicaciones Móviles"} />
                        <CardSkill img={figma} alt={"figma-image"} skillInfo={"Figma"} skillDescription={<p className='text-white opacity-80'>Diseño de interfaces <br /> Móviles y Webs</p>} />
                      

                        
                        
                        
                      

                    </div>
                </div>

            </section>
            <section className='slideContent' id='proyectos'>
                <SliderProjects />
            </section>

        </main>


    )
}

export default HomePage
