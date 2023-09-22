import FormStructure from '../components/formStructure'
import '../css/form.css'
import { useParams } from 'react-router-dom'


function Form() {
    

    const { plan } = useParams()
    if (plan == 'Básico') {
        return (
            <FormStructure segundaP='¿Qué es una landing Page?' terceraP={'¿Puede ser?'} cuartaP={'¿tal vez?'} Pdf='../../../public/downloads/Web Design for Beginners - Project Brief.pdf' />
        )
    } else if (plan == 'Personalizado') {
        return (
            <FormStructure segundaP='¿Qué es un aplicativo web?' Pdf='../../../public/downloads/Web Design for Beginners - Project Brief.pdf'/>
        )
    } else if (plan == 'Avanzado') {
        return (
            <FormStructure segundaP='¿Qué es un Página Web?' Pdf='../../../public/downloads/Web Design for Beginners - Project Brief.pdf' />
        )
    }

}

export default Form