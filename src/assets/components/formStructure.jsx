
import { useParams } from "react-router-dom"

function FormStructure({ segundaP, terceraP, cuartaP }) {

    const {plan} = useParams()
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
                        <div className="collapse-title bg-white text-black peer-checked:bg-white peer-checked:text-black">
                            ¿Deberiamos hacer un contrato?
                        </div>
                        <div className="collapse-content bg-white text-black">
                            <p>En la medida de lo posible si, más que todo acordar en un pdf el trato realizado con el fin de evitar fraude.</p>
                        </div>
                    </div>
                    <div className="collapse bg-base-200 rounded-sm shadow-md">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-white text-black peer-checked:bg-white peer-checked:text-black">
                            {segundaP}
                        </div>
                        <div className="collapse-content bg-white text-black">
                            <p>En la medida de lo posible si, más que todo acordar en un pdf el trato realizado con el fin de evitar fraude.</p>
                        </div>
                    </div>
                    <div className="collapse bg-base-200 rounded-sm shadow-md">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-white text-black peer-checked:bg-white peer-checked:text-black">
                            {terceraP}
                        </div>
                        <div className="collapse-content bg-white text-black">
                            <p>En la medida de lo posible si, más que todo acordar en un pdf el trato realizado con el fin de evitar fraude.</p>
                        </div>
                    </div>
                    <div className="collapse bg-base-200 rounded-sm shadow-md">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-white text-black peer-checked:bg-white peer-checked:text-black">
                            {cuartaP}
                        </div>
                        <div className="collapse-content bg-white text-black">
                            <p>En la medida de lo posible si, más que todo acordar en un pdf el trato realizado con el fin de evitar fraude.</p>
                        </div>
                    </div>
                </div>

                <div className='data mt-10 p-10'>
                    <h3 className='text-black text-3xl font-bold fuenteHurme'>Información de Perfil</h3>
                    <h4 className='text-black text-xl font-thin fuenteHurmeThin'>LLena los campos dependiendo de quien eres para ponerme en contacto contigo</h4>
                    <h3 className='text-black text-2xl font-bold fuenteHurme mt-2'>Datos personales</h3>
                    <h5 className="text-black text-lg font-thin fuenteHurmeThin">Estos datos serán usados como medio de contacto para el desarrollador </h5>
                    <form action="" className="mt-5 formularioPlan">
                        <div className="flex border-b-2 border-opacity-20 border-black w-96 h-10 items-center hover:border-opacity-60">

                            <span className="text-xl">
                                <ion-icon name="mail-outline"></ion-icon>
                            </span>
                            <input type="text" placeholder="Correo" className="bg-transparent  w-full ml-5 text-black font-normal" />
                        </div>
                        <div className="flex border-b-2 border-opacity-20 border-black w-96 h-10 items-center mt-5 hover:border-opacity-60">

                            <span className="text-xl">
                                <ion-icon name="person-outline"></ion-icon>
                            </span>
                            <input type="text" placeholder="Nombre" className="bg-transparent  w-full ml-5 text-black font-normal" />
                        </div>
                    </form>
                    <div className="flex items-center mt-5">
                        <h4 className="text-black font-bold text-lg">Plan</h4>
                        <h6 className="text-black text-opacity-60 ms-2">[{plan}]</h6>
                    </div>
                    <h6 className="text-black">Puedes descargar información relevante con respecto <br /> al plan que seleccionaste antes de adquirir mis servicios</h6>
                    <button className="btn w-52 bg-transparent outline-none border-1 border-opacity-20 mt-5 text-black text-md hover:bg-transparent">

                        Descargar
                        <span className="text-black">
                            <ion-icon name="download-outline"></ion-icon>
                        </span>
                    </button>
                    <button className="btn w-52 bg-transparent outline-none border-1 border-opacity-20 mt-5 text-black text-md hover:bg-transparent">

                        Enviar

                    </button>



                </div>

                
            </section>
        </main>
    )
}

export default FormStructure