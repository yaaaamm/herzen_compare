
import React, { useEffect, useState } from "react";
import "./styles.css"
import Compilation from "./Compilation"
import Table from "./Table/Table"

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
            <div className="compilation">
                <Compilation catalog={catalog} />
            </div>
            <div>
                <Table catalog={catalog} />
            </div>
        </main>
    )
}

export default Main