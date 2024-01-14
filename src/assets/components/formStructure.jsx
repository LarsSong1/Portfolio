import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useParams } from "react-router-dom"
import { Toaster, toast } from 'sonner'

function FormStructure({ segundaP, segundaRes, terceraP, terceraRes, cuartaP, cuartaRes, Pdf }) {
   
    const { plan } = useParams()
    const formulario = useRef();
    
  
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('Larson servicio', 'template_zkc9jbs', formulario.current, '6SV7MIv3wLeQw068j')
            .then((res) => {
                console.log(res.text);

            }, (error) => {
                console.log(error.text);
            });
    };

    const emailSent = () => {
        return toast('Se ha enviado correctamente', {
            icon: <span className='text-success text-xl font-bold'><ion-icon name="checkmark-outline"></ion-icon></span>,
            description: 'Te contestaremos apenas recibamos tu correo',
            duration: 5000
            

        })
    }

  
    const downloadSuccess = () => {
        return toast('Descarga exitosa', {
            icon:<span className='text-white text-xl font-bold'><ion-icon name="download-outline"></ion-icon></span>,
            duration: 4000,
            position: 'top-center'
        })
    }

 

   
    return (
        <main className="formSection relative">
            <h1 className="bg-clip-text text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl fuenteHurme bg-gradient-to-b text-transparent from-violet-400 to-black pt-20 text-center titulo">Hagamos <br /> Realidad tu idea</h1>
            <div className="box-skew">

            </div>
            <section className="grid place-items-center xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">

                <div className='faq mt-10 p-10'>
                    <h3 className='text-black text-3xl font-bold fuenteHurme'>Preguntas Frecuentes</h3>
                    <h4 className='text-black text-xl font-thin fuenteHurmeThin'>Preguntas que por lo general me hace la gente</h4>
                    <div className="collapse bg-base-200 mt-10 rounded-sm shadow-md">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-white text-black peer-checked:bg-white peer-checked:text-black font-bold">
                            ¿Deberiamos hacer un contrato?
                        </div>
                        <div className="collapse-content bg-white text-black">
                            <p>En la medida de lo posible acordar un deposito del 25% o 50% del costo final del proyecto, si en tal caso no se concreta el proyecto pues se le devolvera el 95% del deposito</p>
                        </div>
                    </div>
                    <div className="collapse bg-base-200 rounded-sm shadow-md">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-white text-black peer-checked:bg-white peer-checked:text-black font-bold">
                            {segundaP}
                        </div>
                        <div className="collapse-content bg-white text-black">
                            <p>{segundaRes}</p>
                        </div>
                    </div>
                    <div className="collapse bg-base-200 rounded-sm shadow-md">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-white text-black peer-checked:bg-white peer-checked:text-black font-bold">
                            {terceraP}
                        </div>
                        <div className="collapse-content bg-white text-black">
                            <p>{terceraRes}</p>
                        </div>
                    </div>
                    <div className="collapse bg-base-200 rounded-sm shadow-md">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-white text-black peer-checked:bg-white peer-checked:text-black font-bold">
                            {cuartaP}
                        </div>
                        <div className="collapse-content bg-white text-black">
                            <p>{cuartaRes}</p>
                        </div>
                    </div>
                </div>

                <div className='data mt-10 p-10'>
                    <h3 className='text-black text-3xl font-bold fuenteHurme'>Información de Perfil</h3>
                    <h4 className='text-black text-xl font-thin fuenteHurmeThin'>LLena los campos dependiendo de quien eres para ponerme en contacto contigo</h4>
                    <h3 className='text-black text-2xl font-bold fuenteHurme mt-2'>Datos personales</h3>
                    <h5 className="text-black text-lg font-thin fuenteHurmeThin">Estos datos serán usados como medio de contacto para el desarrollador </h5>
                    <form ref={formulario} onSubmit={sendEmail} className="mt-5 formularioPlan">
                        <div className="flex border-b-2 border-opacity-20 border-black w-96 h-10 items-center mt-5 hover:border-opacity-60">

                            <span className="text-xl">
                                <ion-icon name="person-outline"></ion-icon>
                            </span>
                            <input type="text" placeholder="Nombre" className="bg-transparent  w-full ml-5 text-black font-normal" name='Cliente' />
                        </div>
                        <div className="flex border-b-2 border-opacity-20 border-black w-96 h-10 items-center hover:border-opacity-60">

                            <span className="text-xl">
                                <ion-icon name="mail-outline"></ion-icon>
                            </span>
                            <input type="text" placeholder="Correo" className="bg-transparent  w-full ml-5 text-black font-normal" name='Correo' />
                        </div>
                        <div className="flex mt-5 mb-10  border-opacity-20 border-black w-96 h-10 items-center hover:border-opacity-60">
                            <span className="text-xl">
                                <ion-icon name="chatbox-outline"></ion-icon>
                            </span>
                            <textarea placeholder="Mensaje" className="textarea mt-6 resize-none textarea-bordered ml-1 w-full bg-transparent text-black" name='Mensaje' ></textarea>
                        </div>

                        <div className="flex items-center mt-5">
                            <h4 className="text-black font-bold text-lg">Plan</h4>
                            <h6 className="text-black text-opacity-60 ms-2">[{plan}]</h6>
                        </div>
                        <h6 className="text-black">Puedes descargar información relevante con respecto <br /> al plan que seleccionaste antes de adquirir mis servicios</h6>
                        <div className='grid grid-cols-1'>
                            <a href={Pdf} className="btn w-52 bg-transparent outline-none border-1 border-opacity-20 mt-5 text-black text-md hover:bg-transparent" onClick={downloadSuccess} download='plan'>
                                Descargar
                                <span className="text-black">
                                    <ion-icon name="download-outline"></ion-icon>
                                </span>
                            </a>
                            <button type='submit' className="btn w-52 bg-transparent outline-none border-1 border-opacity-20 mt-5 text-black text-md hover:bg-transparent" onClick={emailSent}>
                                Enviar
                            </button>

                        </div>

                    </form>




                </div>

            <Toaster theme='dark'/>
            </section>
        </main>
    )
}

export default FormStructure