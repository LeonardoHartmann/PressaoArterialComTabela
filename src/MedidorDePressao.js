import { useState } from "react"

const MedidorDePressao = () => {

    const [sistolica, setSistolica] = useState('')
    const [diastolica, setDiastolica] = useState('')
    const [result, setResult] = useState('')

    
    const Verificar = () => {
        if (sistolica < 130 && diastolica < 85) {
            setResult('Normal')
        } else if (sistolica < 140 && diastolica < 90) {
            setResult('Normal - Limítrofe')
        } else if (sistolica < 160 && diastolica < 100) {
            setResult('Hipertensão Leve')
        } else if (sistolica < 180 && diastolica < 110) {
            setResult('Hipertensão Moderada')
        } else {
            setResult('Hipertensão Grave')
        }
    }


    return (
        <div>
            <h1>Controle de Pressão Arterial</h1>

            Pressão sistólica: <br />
            <input type="number" value={sistolica}
                onChange={event => setSistolica(event.target.value)} />

            <br />
            
            Pressão diastólica: <br />
            <input type="number" value = {diastolica}
                onChange={event => setDiastolica(event.target.value)} />

            <br /><br />

            <input type="button" value="Verificar"
                onClick={() => Verificar(result)} />

            <br /><br />

            {result}
        </div>
    )
}

export default MedidorDePressao