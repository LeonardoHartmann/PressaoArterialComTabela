import { useEffect, useState } from "react"

const STORAGE_KEY = 'my-expenses'

const App = () => {
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')

    const [expenses, setExpenses] = useState([])

    useEffect(() => { 
        const tempList = localStorage.getItem(STORAGE_KEY)
        
        if (tempList != null) {
            setExpenses(JSON.parse(tempList))
        }
    }, [])

    const save = () => {
        const expense = {
            description,
            value,
            date,
            category,
        }
        const newExpenses = [...expenses, expense]

        setExpenses(newExpenses)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newExpenses))
        clearForm()
    }

    const clearForm = () => {
        setDescription('')
        setValue('')
        setDate('')
        setCategory('')
    }

    return (
        <div>
            <h1>My Expenses</h1>

            Descrição: <br />
            <input type="text" size="35" value={description}
                onChange={event => setDescription(event.target.value)} />
            <div></div>

            <br />

            Data: <br />
            <input type="date" value={date}
                onChange={event => setDate(event.target.value)} />
            <div></div>

            <br />

            Valor: <br />
            <input type="text" value={value}
                onChange={event => setValue(event.target.value)} />
            <div></div>

            <br />

            Categoria: <br />
            <select value={category} onChange={event => setCategory(event.target.value)}>
                <option value=""></option>
                <option value="Alimentação">Alimentação</option>
                <option value="Vestuário">Vestuário</option>
                <option value="Utilidades">Utilidades</option>
                <option value="Transporte">Transporte</option>
                <option value="Entretenimento">Entretenimento</option>
            </select>
            <div></div>

            <br />
            <input type="button" value="Salvar" onClick={save} /> &nbsp;
            <input type="button" value="Cancelar" onClick={clearForm} />

            <br /><br />
            <table width="70%" border="1">
                <thead>
                    <tr>
                        <th width="40%">Descrição</th>
                        <th width="20%">Categoria</th>
                        <th width="20%">Data</th>
                        <th width="20%">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.description}</td>
                            <td>{expense.category}</td>
                            <td>{expense.date}</td>
                            <td>{expense.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default App