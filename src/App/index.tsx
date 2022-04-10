import React, {FC} from "react";
import { useQuery } from '@paulobarbeiro/reactive-sql'

interface Props {
    title?: string
}

const App: FC<Props> = () => {
    const {result, writeQueryFn } = useQuery("SELECT age,name FROM beatles")

    const handleAddLennon = () => {
        console.log(' add Lennon')
        writeQueryFn("INSERT INTO beatles VALUES (3, 22, 'John');")
    }

    const handleAddGeorge = () => {
        console.log(' add Harrison')
        writeQueryFn("INSERT INTO beatles VALUES (4, 25, 'George');")
    }

    if(!result || result.length === 0) {
        return (
            <p>No data available</p>
        )
    }

    const [data] = result

    return (
        <>
            <h1>Add a beatle</h1>
            <table>
                <caption>Table results</caption>
                <thead>
                <tr>
                    {data.columns.map((column, index) => (<th scope="col" key={index}>{column}</th>))}
                </tr>
                </thead>
                <tbody>
                {data.values.map(([age, name], index) => (
                    <tr key={index}>
                        <th scope="row">{name}</th>
                        <td>{age}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={handleAddLennon}>Add Lennon</button>
            <button onClick={handleAddGeorge}>Add Harrison</button>
        </>
    )
}

export default App