import React from 'react'
import { useSelect } from "reactive-sql-toolkit";

const NintendoTable = () => {
    const result = useSelect("SELECT date, close FROM nintendo WHERE date BETWEEN '2021-01-01' and '2021-12-31'")

    if(result.length === 0) {
        return (
            <div>Data not available</div>
        )
    }

    const [data] = result

    return (
        <table>
            <caption>Nintendo close stock prices</caption>
            <thead>
            <tr>
                {data.columns.map((column, index) => (<th scope="col" key={index}>{column}</th>))}
            </tr>
            </thead>
            <tbody>
            {data.values.map(([date, closeValue], index) => (
                <tr key={index}>
                    <th scope="row">{date}</th>
                    <td>{closeValue}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default NintendoTable