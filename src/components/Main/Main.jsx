
import React, { useEffect, useState } from "react";
import "./styles.css"
import Card from "./Card"

const Main = () => {
    const [catalog, setCatalog] = useState(null)
    useEffect(() => {
        const el = document.getElementById("data")
        if (el) {
            const data = JSON.parse(el.getAttribute("data"))
            if (data) {
                console.log("data")
                console.log(el, data)
                setCatalog(data)
            }
        }
    }, [setCatalog])
    return (
        <main className="main">
            <Card catalog={catalog} />
        </main>
    )
}

export default Main