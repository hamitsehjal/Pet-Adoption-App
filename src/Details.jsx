import React from 'react'
import { useParams } from 'react-router-dom'
function Details() {
    const { id } = useParams();
    return (
        <h2>Hi! {id}</h2>
    )
}

export default Details