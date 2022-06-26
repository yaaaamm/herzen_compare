
import React from "react";
import "./styles.css"


const Card = (props) => {
    return (
        <>
            <div className="item__img-wrap">
                <a className="item__link" href={props.url}>
                    <img className="item__img" src={props.thumb} alt="" />
                </a>
                <div className="item__photo"><img className="item__photo-icon" src="" alt="" />
                    <div className="item__photo-count"></div>
                </div>
            </div>
            <div className="item__container">
                <div className="item__row"><img className="item__icon" src="" alt="" />
                    <div className="item__text">{props.hz_roads}</div>
                </div>
                <a className="item__name" href="url">{props.hz_building_name_obj}</a>
                <div className=" item__row"><img className="item__icon" src="./images/area.png" alt="" />
                    <div className="item__text">{props.hz_building_area_min} до {props.hz_building_area_max} м2</div>
                </div>
                <div className="item__text">{props.hz_temp_price}</div>
            </div >
    </>
    )
}

export default Card