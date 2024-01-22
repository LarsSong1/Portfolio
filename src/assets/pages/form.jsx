import FormStructure from '../components/formStructure'
import '../css/form.css'
import { useParams } from 'react-router-dom'
import starterplan from '../../../public/downloads/starterweb.pdf'
import avanzado from '../../../public/downloads/avanzado.pdf'

function Form() {


    const { plan } = useParams()
     if (plan == 'starterweb') {
        return (
            <FormStructure segundaP='¿En que consiste este plan?' 
            segundaRes={'El StarterWeb Package es un plan asequible diseñado para satisfacer las necesidades básicas de pequeños negocios que buscan tener presencia en línea de manera rápida y efectiva. Este plan proporciona una solución simple pero atractiva para aquellos que desean tener una página web funcional sin comprometer su presupuesto'}
            terceraP={'¿Cuántas páginas incluye el plan StarterWeb?'}
            terceraRes={'El plan incluye hasta 3 páginas, que generalmente abarcan la página de inicio, servicios/sobre-nosotros, contacto u otras páginas esenciales según tus necesidades'}
            cuartaP={'¿Qué sucede si necesito más páginas en el futuro?'}
            cuartaRes={'Podemos discutir opciones para expandir tu sitio web en el futuro, ajustando el plan según tus necesidades cambiantes'}
            Pdf={starterplan}
            />
            )
    } else if (plan == 'Avanzado') {
        return (
            <FormStructure segundaP='¿Hay opciones de capacitación más avanzada para el usuario en este plan?' 
            segundaRes={'En efecto, se guiará al cliente durante todo el proceso, se le explicará la importancia de cada funcionalidad y mediante estandares de diseño y requerimientos del cliente se le entregará el producto final'}
            terceraP={'¿Cuántas páginas incluye el plan Avanzado?'}
            terceraRes={'Este plan ofrece capacidad hasta para 6 de páginas, 2 adicionales y secciones según tus requisitos'}
            cuartaP={'¿Cuántas revisiones y modificaciones puedo realizar en el diseño antes de la implementación final?'}
            Pdf={avanzado}
            cuartaRes={'Incluye 3 rondas de revisiones para asegurarnos de que el diseño cumpla con tus expectativas antes de la implementación'}
            />
        )
    }

}

export default Form