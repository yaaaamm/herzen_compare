import React from "react";
import "./header.css"


const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="sub-header">
                <div className="top__address">
                   <img className="address__icon" src="./images/Vector.png" alt=""/>
                </div>
                <div className="address__text">
                    Балашиха, Шоссе Энтузиастов, 1А, стр. 3Б
                </div>
                <a class="email top__email" href="mailto:Sklad@herzen.biz">Sklad@herzen.biz</a>
                <div class="whatsapp top__whatsapp">
                    <img class="whatsapp__icon" src="./images/whatsapp_icon.png" alt="" />
                    <a class="whatsapp__link" href="https://wa.me/79255849894">+7 925 584-98-94</a>
                </div>
            </div>
            <div className="header">
                <div className="header__logo">
                    <a class="logo" href="/"><img class="logo__img"
                        src="./images/logo.png"
                        alt="" />
                        <div class="logo__text">Ваш индустриальный<br/>брoкер</div>
                    </a>
                </div>
                <div class="phone navbar__phone"><img class="phone__icon"
                    src="./images/phone.png"
                    alt="" />
                    <a class="phone__link" href="tel:+74959955871">+7 (495) 99-55-871</a>
                    <a class="download" href="">Скачать</a>
                </div>
            </div>
        </div>
    )
}

export default Header