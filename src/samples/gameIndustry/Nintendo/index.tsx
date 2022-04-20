import React from 'react'
import { useSelect } from "reactive-sql-toolkit";

// Components
import CardTable from "../../../components/CardTable";

const NintendoTable = () => {
    const result = useSelect(
        "SELECT date, close FROM nintendo WHERE date BETWEEN '2021-01-01' and '2021-12-31' LIMIT 10"
    )

    return (
        <CardTable
            header={"Nintendo close stock prices"}
            queryResult={result}
        />
    )
}

export default NintendoTable