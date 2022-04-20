import React, {FC} from "react";
import {Link} from "react-router-dom";
import { Container, Button } from 'semantic-ui-react'

interface Props {
    title?: string
}

const App: FC<Props> = () => {
    return (
        <Container>
            <h1>Database Examples</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Button as={Link} to="/beatles">Beatles</Button>
                <Button as={Link} to="/game-industry">Game Industry</Button>
            </nav>
        </Container>
    )
}

export default App