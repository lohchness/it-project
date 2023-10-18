import React from "react";

function ConnectionList() {
    const names = ['Conn1', 'Conn2', 'Conn3']
    const nameList = names.map(
        name =>
            <h2>{name}</h2>
    )
    return (
        <div>{nameList}</div>
    )
}

export default ConnectionList   