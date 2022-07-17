
import React, { useEffect, useState } from "react";
import "./styles.css"
import Compilation from "./Compilation"
import Table from "./Table/Table"
import Building from "./Building/Building"
import Footer from "./Footer/Footer"

const Main = () => {
    const [catalog, setCatalog] = useState([])
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
                <Compilation catalog={ catalog } />
                    <Table catalog={ catalog } />
                    {catalog.map(( key, value, index )  => { 
                    return (
                    <Building catalog={ key } />
                    )
                })
                }
                <Footer />
        </main>
    )
}

export default Main