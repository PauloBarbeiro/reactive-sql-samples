import React, {FC, useEffect, useState} from "react";
import { Grid, Divider, Container, Header } from 'semantic-ui-react'
import createSQL from 'reactive-sql-toolkit'

// Components
import Starter from "./starter";
import NintendoTable from "./Nintendo";
import UbisoftTable from "./Ubisoft";

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
        <Container>
            <Grid divided={"vertically"}>
                <Grid.Row>
                    <Header as={'h1'}>Game Industry from 2010 - 2022</Header>
                </Grid.Row>
                <Grid.Row>
                    <Starter />
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <NintendoTable/>
                    </Grid.Column>
                    <Grid.Column>
                        <UbisoftTable/>
                    </Grid.Column>
                    <Grid.Column>
                        Examples of data queries
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default GameIndustry