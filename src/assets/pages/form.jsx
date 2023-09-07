import FormStructure from '../components/formStructure'
import '../css/form.css'
import { useParams } from 'react-router-dom'

function Form() {
    const { plan } = useParams()
    if (plan == 'Básico') {
        return (
            <FormStructure segundaP={'¿Hola?'} terceraP={'¿Puede ser?'} cuartaP={'¿tal vez?'}/>
        )
    }else if (plan == 'Personalizado'){
        return(
            <FormStructure/>
        )
    }else if (plan == 'Avanzado' ){
        return(
            <FormStructure/>
        )
    }

}

export default Form