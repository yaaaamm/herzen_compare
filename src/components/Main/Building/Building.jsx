import React from "react";
import "./building.css"


const Compilation = (props) => {
    if (!props.catalog) {
        return null
    }
    console.log(props.catalog)
    return (
        <>
          <div className="objects-sec">
            <div className="objects-sec__container">
               <div className="objects-sec-top">
                  <h2 className="object-sec-title">Объект №1 (Склад-производство, Класс А)</h2>
                  <a href="#" className="price-select">
                     3 000₽ за м²/год
                  </a>
               </div>
               <div className="objects-sec-content">
                  <div className="content-imgs">
                     <div className="img-block first">
                        <img src="./images/herzen/objectsBlock1.jpg" alt=""/>
                        <img src="./images/herzen/objectsBlock1-mob.jpg" alt="" className="block-img-mob"/>
                     </div>
                     <div className="img-block">
                        <img src="./images/herzen/objectsBlock2.jpg" alt=""/>
                     </div>
                     <div className="img-block last">
                        <img src="./images/herzen/objectsBlock3.jpg" alt=""/>
                        <img src="./images/herzen/objectsBlock3-mob.jpg" alt="" className="block-img-mob"/>
                        <div className="price-block">
                           <img src="./images/herzen/priceBlock.svg" alt=""/>
                           <p className="priceBlock-text">13 300 м²</p>
                        </div>
                     </div>
                  </div>
                  <div className="descr-props-block">
                     <div className="descr-block__top">
                        <p className="descr-title">Общая характеристика</p>
                        <a href="#" className="btn">
                           <img src="./images/herzen/down-btn1.svg" alt="" className="download-img" />
                           Скачать PDF
                        </a>
                     </div>
                     <div className="descr-block__content">
                        <div className="prop-col">
                           <p className="prop-text">Отопление:<span> Отапливаемый (тёплый)</span></p>
                           <p className="prop-text">Высота потолка:<span> 4 м</span></p>
                           <p className="prop-text">Этажность:<span> 3</span></p>
                           <p className="prop-text">Пол:<span> Бетон</span></p>
                           <p className="prop-text">Ворота:<span> 2 въезных ворот</span></p>
                        </div>
                        <div className="prop-col">
                           <p className="prop-text">Арендная ставка:<span> от 5 000 руб/м²/год</span></p>
                           <p className="prop-text">OPEX:<span> </span></p>
                           <p className="prop-text">Налогообложение:<span> УСН</span></p>
                           <p className="prop-text"> Оплата коммунальных услуг: <span>отдельно по счётчику</span></p>
                           <p className="prop-text">Мощность на объекте:<span> 3000 кВт</span></p>
                        </div>
                        <div className="prop-col last">
                           <p className="prop-text">Арендная ставка:<span> от 5 000 руб/м²/год</span></p>
                           <p className="prop-text">OPEX:<span> </span></p>
                           <p className="prop-text">Налогообложение:<span> УСН</span></p>
                           <p className="prop-text"> Оплата коммунальных услуг: <span>отдельно по счётчику</span></p>
                           <p className="prop-text">Мощность на объекте:<span> 3000 кВт</span></p>
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