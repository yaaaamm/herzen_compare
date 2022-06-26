
import React from "react";
import "./styles.css"


const Card = () => {
    return (
        <div class="item__img-wrap">
            <a class="item__link" href="<?php echo $url; ?>"><img class="item__img"
            src=""
            alt="" /></a>

            <div class="item__class"></div><a class="item__bookmark"href=""></a>
            <div class="item__photo"><img class="item__photo-icon" src="" alt="" />
                <div class="item__photo-count"></div>
            </div>
        </div>
    )
}

export default Card