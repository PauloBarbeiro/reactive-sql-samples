import React, {FC, useEffect, useState} from "react";
import createSQL from 'reactive-sql-toolkit'
import Starter from "./starter";
import NintendoTable from "./Nintendo";

const marketTableStructure = {
    date: 'DATE',
    open: 'DOUBLE',
    high: 'DOUBLE',
    low: 'DOUBLE',
    close: 'DOUBLE',
    volume: "INTEGER",
    currency: "TEXT"
}

interface Props {
    title?: string
}

const GameIndustry: FC<Props> = () => {
    const [isDbReady, setDbReady] = useState<boolean>(false)
    const [isNintendoReady, setNintendoReady] = useState<boolean>(false)

    useEffect(() => {
        const schema: any = {
            ubisoft: {
                fields: {...marketTableStructure},
            },
            nintendo: {
                fields: {...marketTableStructure},
            }
        }

        createSQL('http://localhost:3030/sql-wasm.wasm', schema)
            .then(res => {
                if(!!res) {
                    setDbReady(true)
                    // @ts-ignore
                    window.db = res
                }
            })
            .catch(console.error)
    }, [])

    if(!isDbReady) {
        return null
    }

    return(
        <div>
            <h1>Game Industry from 2010 - 2022</h1>
            <Starter />
            <div>
                <NintendoTable/>
            </div>
        </div>
    )
}

export default GameIndustry