
import React, { useEffect, useState } from "react";
import "./styles.css"
import Card from "./Card"

const Main = () => {
    const [catalog, setCatalog] = useState(null)
    useEffect(() => {
        const el = document.getElementById("data")
        const data = JSON.parse(el.getAttribute("data"))
        console.log("data")
        console.log(el, data)
        setCatalog(data)
    })
    return (
        <main className="main">
            <Card catalog={catalog} />
        </main>
    )
}

export default Main