import React from "react";
import { useInsert } from "reactive-sql-toolkit";

// Queries
import { insertNintendoQuery, insertUbisoftQuery } from '../../../database/query'

const Starter = () => {
    const insert = useInsert()

    const handleLoadNintendo = () => {
        insert(insertNintendoQuery.query)
    }

    const handleLoadUbisoft = () => {
        console.log('handleLoadUbisoft')
        insert(insertUbisoftQuery.query)
    }

    return (
        <div>
            <button onClick={handleLoadNintendo}>Load Nintendo</button>
            <button onClick={handleLoadUbisoft}>Load Ubisoft</button>
        </div>
    )
}

export default Starter