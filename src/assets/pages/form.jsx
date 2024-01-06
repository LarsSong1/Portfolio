import FormStructure from '../components/formStructure'
import '../css/form.css'
import { useParams } from 'react-router-dom'


function Form() {


    const { plan } = useParams()
    if (plan == 'Básico') { 
        return (
            <FormStructure segundaP='¿Qué es una landing Page?' segundaRes={<>
                Una landing page es una página web individual y altamente enfocada diseñada para convertir visitantes en clientes o leads al presentarles una oferta específica o información relevante. <strong> Ideal para pequeños negocios </strong>
            </>}
                terceraP={<>¿Como beneficia a mi negocio tener una landingPage?</>} terceraRes={<>
                    Una landing page permite a un pequeño negocio dirigir a los visitantes hacia acciones clave, como compras o registros, de manera efectiva y rentable</>}
                cuartaP={<>¿Porque las landingPage son mas económicas?</>} cuartaRes={<>Una landingPage se enfoca en una acción específica como promocionar un producto, lo que la hace más económica que una página web completa. Esto la convierte en una opción efectiva para campañas de marketing con presupuestos limitados</>}
                Pdf='../../../public/downloads/Web Design for Beginners - Project Brief.pdf' />
        )
    } else if (plan == 'Personalizado') {
        return (
            <FormStructure segundaP='¿Qué es un aplicativo web?' Pdf='../../../public/downloads/Web Design for Beginners - Project Brief.pdf' />
        )
    } else if (plan == 'Avanzado') {
        return (
            <FormStructure segundaP='¿Qué es un Página Web?' Pdf='../../../public/downloads/Web Design for Beginners - Project Brief.pdf' />
        )
    }

}

export default Form