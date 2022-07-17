import React from "react";
import "./styles.css"
import Card from "./Card"

const Compilation = (props) => {
    if (!props.catalog) {
        return null
    }
    console.log(props.catalog)
    return (
        <>
          <div className="compilation">
            <div className="compilation__container">
                    <div className="compilation__content">
                        <h1 class="stores__title compl__title">Подборка объектов недвижимости HERZEN</h1>
                        <div className="compl__block">
                            <img src="./images/herzen/map.jpg" alt="" class="map" />
                            <div className="hor-wrap">
                                <div className="scroll-side">
                                   {props.catalog.map(( key, value, index )  => { 
                                       return (
                                       <Card catalog={ key }/>
                                       )
                                    })
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Compilation