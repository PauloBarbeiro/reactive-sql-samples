import React, { FC } from 'react'
import { Card, Table } from 'semantic-ui-react'

interface Props {
    header: string
    queryResult: Array<any>// TODO: Fix export of types: QueryExecResult
}

const CardTable: FC<Props> = ({ header, queryResult }) => {
    if(queryResult.length === 0) {
        return (
            <Card>Data not available</Card>
        )
    }

    const [data] = queryResult

    return (
        <Card>
            <Card.Content>
                <Card.Header>{header}</Card.Header>
            </Card.Content>
            <Card.Content>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            {/* @ts-ignore */}
                            {data.columns.map((column, index) => (
                                <Table.HeaderCell key={index}>{column}</Table.HeaderCell>
                            ))}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {/* @ts-ignore */}
                        {data.values.map(([date, closeValue], index) => (
                            <Table.Row key={index}>
                                <Table.Cell>{date}</Table.Cell>
                                <Table.Cell>{closeValue}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Card.Content>
        </Card>
    )
}

export default CardTable