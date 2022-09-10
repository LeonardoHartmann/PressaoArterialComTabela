import React, { useState } from "react";


const CalDeSub = () => {

  document.title = 'Cal de Sub'

    const [nota, setNota] = useState(0)
    const [opcao, setOpcao] = useState('G1')
    const [notaFinal, setnotaFinal] = useState('')
    const [resulSub, setResultsub] = useState('')
    const [resultadofinal, setresultadofinal] = useState('')

  
    const MandarInfo = () =>{ //quando clicar em "verificar a opcao escolhida sera executada"
        if (opcao === 'G2'){
            setnotaFinal((21 - nota)/2)
            setResultsub('G1')
            setresultadofinal('Sua nota na sub ' + resulSub + ' deverá ser de ' + notaFinal)
        }
        else if (opcao === 'G1'){
            setnotaFinal( 21 - (nota * 2))
            setResultsub('G2')
            setresultadofinal('Sua nota na sub ' + resulSub + ' deverá ser de ' + notaFinal)
        }
    }
    
    return(
      <div>
        <h1>Calculadora Nota de Sub</h1>
        <br></br>
        
        <input type='radio'
        checked={() => setResultsub('G1')}
        onChange={() => setOpcao('G2')}/> Sub G1

        <input type='radio'
        checked={() => setResultsub('G2')}
        onChange={() =>setOpcao('G1')}/> Sub G2
        <br></br>
        <br></br>
        
        Nota: {opcao}
        <br></br>

        <input type='number' 
          onChange={(event) => setNota(event.target.value)}/>
        
        <br /><br />
      
        <input type='button' value='Verificar'
          onClick={() => MandarInfo()}/>
        
        <br /><br />
        {resultadofinal}

      </div>
    )
}

export default CalDeSub