import React, {FC} from "react";
import { useQuery } from 'reactive-sql-toolkit'
import {Link} from "react-router-dom";

interface Props {
    title?: string
}

const App: FC<Props> = () => {
    return (
        <div>
            <h1>Database Examples</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/beatles">Beatles</Link> |{" "}
                <Link to="/game-industry">Game Industry</Link>
            </nav>
        </div>
    )
}

export default App