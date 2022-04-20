import React, {FC, useEffect, useState} from "react";
import createSQL from 'reactive-sql-toolkit'
import BeatlesTable from "./table";

interface Props {
    title?: string
}

const Beatles: FC<Props> = () => {
    const [isDbReady, setDbReady] = useState<boolean>(false)

    useEffect(() => {
        const schema: any = {
            beatles: {
                fields: {id: 'INTEGER', age: 'INTEGER', name: 'TEXT'},
                values: [{id: 1, age: 20, name: 'Ringo'}, {id: 2, age: 18, name: 'Paul'}]
            }
        }

        createSQL('http://localhost:3030/sql-wasm.wasm', schema)
            .then(res => {
                if(!!res) {
                    setDbReady(true)
                }
            })
            .catch(console.error)
    }, [])

    if(!isDbReady) {
        return null
    }

    return(
        <BeatlesTable />
    )
}

export default Beatles