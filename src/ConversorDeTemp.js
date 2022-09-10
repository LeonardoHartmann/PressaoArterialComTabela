import React, { useState } from "react"

const ConversorDeTemp = () => {

    document.title='ConversorDeTemp'

    const [temperatura, setTemperatura] = useState('') 
    const [opcao, setOpcao] = useState('')  
    const [result, setResult] = useState('') 
    const [exibirResultado, setexibirResultado] = useState('')


  const Exibir = () => {
    if (opcao === 'F'){
      setResult(((temperatura) * 5)/9)
      setexibirResultado('Resultado: ' + result + opcao)
    }

    else if(opcao === "C") {
      setResult(((temperatura * 9) / 5) + 32)
      setexibirResultado('Resultado: ' + result + opcao)
    }
  }

    return(
        <div>
            <h1>Conversor de Temperatura</h1>
            <br/>
            
            Temperatura:<br/> <br/>
            <label>
                <input type= 'text'
                onChange={(event)=> setTemperatura(event.target.value)}/>  
            </label>
            <label>
                <input type='radio' 
                checked={opcao === 'F'}
                onChange={()=> setOpcao('F')}/> Fahrenheit(F)
            </label>
            <label>
                <input type='radio' 
                checked={opcao === 'C'}
                onChange={()=> setOpcao('C')}/> Celsius(C)
            </label>
            <br/><br/>
            
            <input type='button' value='Verificar'
                onClick={()=> Exibir()}/>
            <br/><br/>

            {exibirResultado}

        </div>
    )

}

export default ConversorDeTemp