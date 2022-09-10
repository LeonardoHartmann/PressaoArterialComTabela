import { useState } from "react";
import { useEffect } from "react";

const NewApp = () => {
    const [sistolica, setSistolica] = useState('')
    const [diastolica, setDiastolica] = useState('')
    const [data, setData] = useState('')
    const [items, setItems] = useState([])
    
    useEffect(() => {
        const tempList = localStorage.getItem('pressão-arterial')
        if (tempList != null) {
          setItems(JSON.parse(tempList ))
        }
      }, [])

    const saveItems = () => {
        const item = {
            data, sistolica, diastolica
        }

        const savedItems = [...items, item]
        setItems(savedItems)
        setDiastolica('')
        setSistolica('')
        setData('')

        localStorage.setItem('pressão-arterial', JSON.stringify(savedItems))
    }
    
    return (
        <div>
            <h1>Controle de Pressão Arterial</h1>
            
            Data <br/>
            <input type="text" name="data" onChange={(event) => setData(event.target.value)}/>
            <br/>
            <br/>

            Pressão sistólica <br/>
            <input type="number" name="sistolica" onChange={(event) => setSistolica(event.target.value)} />
            <br /><br />
            
            Pressão diastólica: <br />
            <input type="number" name="diastolica" onChange={(event) => setDiastolica(event.target.value)} />
            <br /><br />
            
            <input type="button" value="Salvar" onClick={saveItems} />
            <br /><br />
            
            <table border="1" width="90%">
                <tr>
                <th>Data</th>
                <th>Sistolica</th>
                <th>Diastólica</th>
                </tr>
                {
                    items.map( (item, index) => (
                        <tr>
                            <td key={index}>{item.data}</td>
                            <td key={index}>{item.sistolica}</td>
                            <td key={index}>{item.diastolica}</td>
                        </tr>
                    ))
                }
            </table>
    
        </div>
    )
}

export default NewApp