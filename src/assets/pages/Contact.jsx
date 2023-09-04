import '../css/contactPage.css'
import avatar from '../img/avatar.svg'
import whatsapp from '../img/whatsapp.svg'
import linkedin from '../img/linkedin.svg'
import telegram from '../img/telegram.svg'

function Contact() {
  return (
    <main className="heroSection heroSection2">
      <section className="grid z-20 relative prices place-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-10 mt-20 xl:mt-0">
        <div className='lg:col-span-3 xl:col-span-3'>
          <h1 className=' text-blendGradient text-center bg-clip-text text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl fuenteHurme bg-gradient-to-b text-transparent from-violet-400 to-black '>Planes a tu <hr /> Medida</h1>
        </div>
        <div className="card w-4/4 bg-white shadow-xl">
          <div className="card-body items-center justify-between text-center text-black">
            <ul className='text-left'>
              <h2 className="fuenteHurme font-light text-center text-4xl pb-5">Básico</h2>
              <h1 className='text-center bg-clip-text text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl fuenteHurme bg-gradient-to-b text-transparent from-violet-400 to-black pb-5'>$40-70</h1>
              <li className='text-lg flex items-center'>
                <ion-icon name="checkmark-outline"></ion-icon>
                <p className='ps-4 text-base sm:text-base md:text-md lg:text-lg xl:text-lg'>Desarrollo de sitio web estático</p>
              </li>
              <li className='text-lg flex items-center'>
                <ion-icon name="checkmark-outline"></ion-icon>
                <p className='ps-4 text-base sm:text-base md:text-md lg:text-lg xl:text-lg'>Diseño resposive</p>
              </li>
              <li className='text-lg flex items-center'>
                <ion-icon name="checkmark-outline"></ion-icon>
                <p className='ps-4 text-base sm:text-base md:text-md lg:text-lg xl:text-lg'>Integración con Redes sociales</p>
              </li>
              <li className='text-lg flex items-center'>
                <ion-icon name="checkmark-outline"></ion-icon>
                <p className='ps-4 text-base sm:text-base md:text-md lg:text-lg xl:text-lg'>Formulario de contacto básico</p>
              </li>
              <li className='text-lg flex items-center'>
                <ion-icon name="checkmark-outline"></ion-icon>
                <p className='ps-4 text-base sm:text-base md:text-md lg:text-lg xl:text-lg'>Maquetación web en base a Modelo de negocio</p>
              </li>
            </ul>
            <div className="card-actions w-full">
              <button className="btn btn-primary w-full fuenteCentury">Adquirir</button>
            </div>
          </div>
        </div>
        <div className="card w-4/4 card-middle bg-white shadow-xl">
          <div className="card-body items-center justify-between text-center text-black">
            <ul className='text-left'>
              <h2 className="fuenteHurme font-light text-center text-4xl pb-5">Personalizado</h2>
              <h1 className='text-center bg-clip-text text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl fuenteHurme bg-gradient-to-b text-transparent from-violet-400 to-black pb-5'>+$1200</h1>
              <li className='text-lg flex items-center'>
                <ion-icon name="checkmark-outline"></ion-icon>
                <p className='ps-4 text-base sm:text-base md:text-md lg:text-lg xl:text-lg'>Todo lo incluido en el plan avanzado</p>
              </li>
              <li className='text-lg flex items-center'>
                <ion-icon name="checkmark-outline"></ion-icon>
                <p className='ps-4 text-base sm:text-base md:text-md lg:text-lg xl:text-lg'>Desarrollo de aplicativos webs personalizados</p>
              </li>
              <li className='text-lg flex items-center'>
                <ion-icon name="checkmark-outline"></ion-icon>
                <p className='ps-4 text-base sm:text-base md:text-md lg:text-lg xl:text-lg'>Integración de base de datos</p>
              </li>
              <li className='text-lg flex items-center'>
                <ion-icon name="checkmark-outline"></ion-icon>
                <p className='ps-4 text-base sm:text-base md:text-md lg:text-lg xl:text-lg'>Soporte técnico continuo</p>
              </li>
              <li className='text-lg flex items-center'>
                <ion-icon name="checkmark-outline"></ion-icon>
                <p className='ps-4 text-base sm:text-base md:text-md lg:text-lg xl:text-lg'>Optimizacion y Posicionamiento para SEO avanzado</p>
              </li>
            </ul>
            <div className="card-actions w-full">
              <button className="btn btn-primary w-full fuenteCentury">Adquirir</button>
            </div>
          </div>
        </div>
        <div className="card w-4/4 bg-white shadow-xl">
          <div className="card-body items-center justify-between text-center text-black">
            <ul className='text-left'>
              <h2 className="fuenteHurme font-light text-center text-4xl pb-5">Avanzado</h2>
              <h1 className='text-center bg-clip-text text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl fuenteHurme bg-gradient-to-b text-transparent from-violet-400 to-black pb-5'>$700-1200</h1>
              <li className='text-lg flex items-center'>
                <ion-icon name="checkmark-outline"></ion-icon>
                <p className='ps-4 text-base sm:text-base md:text-md lg:text-lg xl:text-lg'>Todo lo incluido en el plan basico</p>
              </li>
              <li className='text-lg flex items-center'>
                <ion-icon name="checkmark-outline"></ion-icon>
                <p className='ps-4 text-base sm:text-base md:text-md lg:text-lg xl:text-lg'>Integración con Apis y servicios </p>
              </li>
              <li className='text-lg flex items-center'>
                <ion-icon name="checkmark-outline"></ion-icon>
                <p className='ps-4 text-base sm:text-base md:text-md lg:text-lg xl:text-lg'>Funcionalidades personalizadas</p>
              </li>
              <li className='text-lg flex items-center'>
                <ion-icon name="checkmark-outline"></ion-icon>
                <p className='ps-4 text-base sm:text-base md:text-md lg:text-lg xl:text-lg'>Diseño personalizado</p>
              </li>
              <li className='text-lg flex items-center'>
                <ion-icon name="checkmark-outline"></ion-icon>
                <p className='ps-4 text-base sm:text-base md:text-md lg:text-lg xl:text-lg'>Soporte técnico 2 Meses</p>
              </li>
            </ul>
            <div className="card-actions w-full">
              <button className="btn btn-primary w-full fuenteCentury">Adquirir</button>
            </div>
          </div>
        </div>


      </section>
      <section className='presentation relative flex items-center justify-end flex-row-reverse'>
        
        <div className='relative content-card flex items-end justify-center  flex-col '>
          <h1 className='text-white mx-auto top-32 relative fuenteHurme text-6xl lg:text-8xl xl:text-8xl slideLar'>Lar</h1>
          <h1 className='mx-auto top-20 relative bg-gradient-to-r from-violet-700 fuenteHurme to-indigo-400 bg-clip-text text-transparent text-6xl lg:text-8xl xl:text-8xl slideSon'>Son</h1>
          <div className="card w-96 bg-violet-50 shadow-xl z-20 me-40 flex flex-col justify-center relative">
            <figure className="px-5 pt-5">
              <img src={avatar} alt="Shoes" className="rounded-xl avatar" loading='lazy' />
            </figure>
            <div className="card-body  items-center text-center pt-0 mt-0">
              <h2 className="card-title text-black text-4xl fuenteHurme">Jair Alejandro</h2>
              <p className='text-slate-500 text-xl'>Ecuador</p>
            </div>

          </div>
          <h1 className='absolute second-acro text-transparent z-20 bg-clip-text text-9xl bg-gradient-to-r from-violet-700 fuenteHurme to-indigo-400 left-0'>Son</h1>
          <div className='mx-auto flex me-40  w-96 justify-between redesSociales'>
            <a href='' className='bg-violet-50 rounded-lg w-20 h-16 flex justify-center  mt-5'>
              <img className='mx-auto' src={linkedin} alt="linkedin-contact" />
            </a>
            <a href='' className='bg-violet-50 w-20 rounded-lg h-16 flex justify-center mt-5'>
              <img className='mx-auto' src={telegram} alt="telegram-contact" />
            </a>
            <a href='' className='bg-violet-50 w-20 rounded-lg h-16 flex justify-center mt-5'>
              <img className='mx-auto' src={whatsapp} alt="whatsapp-contact" />
            </a>
          </div>
        </div>
        <div className='enlace relative'>
          <a href="" className='text-black absolute bottom-10 left-10 text-2xl fuenteHurme font-light flex items-center w-full'>
            <p className='pe-5'>Consulta Personal</p>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </a>
          <h1 className='absolute text-black text-9xl z-20 fuenteHurme font-bold first-acro top-80 right-0'>Lar</h1>
        </div>
        {/* <h1 className='absolute text-black text-9xl z-20 fuenteHurme font-bold first-acro top-80 right-0'>Lar</h1> */}
        



      </section>
    </main>
  )
}

export default Contact