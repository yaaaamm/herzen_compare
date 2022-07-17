import React from "react";
import "./table.css"

const Table = (props) => {
    if (!props.catalog) {
        return null
    }
    console.log(props.catalog)
    return (
        <>
         <div className="table-sec">
            <div className="table-sec__container">
                <div className="table-sec-top">
                    <h2 class="table-sec-title">Сравнительный анализ объектов</h2>
                    <div class="download-table-btns">
                     <a href="" class="btn">
                        <img src="./images/herzen/down-btn1.svg" alt="" class="download-img" />
                        Скачать PDF
                     </a>
                     <a href="" class="btn">
                        <img src="./images/herzen/down-btn2.svg" alt="" class="download-img" />
                        скачать XSL
                     </a>
                  </div>
                </div>
            <div className="table-sec-content">
                <div className="table-wrap">
                    <div className="table-block">
                        <div class="first-col">
                           <div class="title-row">Объект</div>
                           <div class="table-row">ID в базе</div>
                           <div class="table-row">Дата ввода/освобождения</div>
                           <div class="table-row">Класс склада</div>
                           <div class="table-row">Площадь объекта, м2</div>
                           <div class="table-row">Адрес объекта</div>
                           <div class="table-row">Расстояние от МКАД, км</div>
                           <div class="table-row">Направление</div>
                           <div class="table-row">Рабочая высота потолков</div>
                           <div class="table-row">Ворота</div>
                           <div class="table-row row-green-bg border-top-row">Цена аренды итого, руб/мес</div>
                           <div class="table-row row-green-bg">Ставка ALL IN (вкл OPEX), руб/м2/г</div>
                           <div class="table-row row-green-bg">Ставка ALL IN, руб/м2/месяц</div>
                           <div class="table-row row-green-bg">Налогообложение (НДС/УСН)</div>
                           <div class="table-row row-green-bg">Комм. услуги</div>
                           <div class="table-row row-green-bg">Tripple Net, руб/м2/год</div>
                           <div class="table-row row-green-bg border-bottom-row">OPEX, руб/м2/год</div>
                           <div class="table-row last-row">Ссылка на сайт/презу</div>
                        </div>
                        <div class="scroll-content">
                           <div class="wrap-scroll">
                              <div class="col">
                                 <div class="title-row">Софьино</div>
                                 <div class="table-row">7844</div>
                                 <div class="table-row">декабрь 22</div>
                                 <div class="table-row">A-класс</div>
                                 <div class="table-row">40 000</div>
                                 <div class="table-row big-row">МО, Раменский го, территория Логистический парк Софьино с3/1</div>
                                 <div class="table-row">30 км</div>
                                 <div class="table-row">Новорязанское шоссе</div>
                                 <div class="table-row"></div>
                                 <div class="table-row"></div>
                                 <div class="table-row row-green-bg border-top-row"></div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg">НДС (20%) включен</div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg border-bottom-row">не включен, н/д</div>
                                 <div class="table-row last-row"></div>
                              </div>
                              <div class="col">
                                 <div class="title-row">Котельники</div>
                                 <div class="table-row">8243</div>
                                 <div class="table-row">июнь 22</div>
                                 <div class="table-row">A-класс</div>
                                 <div class="table-row">10 000 - 32 374</div>
                                 <div class="table-row big-row">МО, Котельники, Яничкин проезд, 2</div>
                                 <div class="table-row">5 км</div>
                                 <div class="table-row">Новорязанское шоссе</div>
                                 <div class="table-row"></div>
                                 <div class="table-row"></div>
                                 <div class="table-row row-green-bg border-top-row"></div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg">НДС (20%) включен</div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg border-bottom-row">р. 1440</div>
                                 <div class="table-row last-row"></div>
                              </div>
                              <div class="col">
                                 <div class="title-row">Белая Дача</div>
                                 <div class="table-row">8244</div>
                                 <div class="table-row">июнь 22</div>
                                 <div class="table-row">A-класс</div>
                                 <div class="table-row">32000</div>
                                 <div class="table-row big-row">МО, Котельники, Яничкин проезд, 2</div>
                                 <div class="table-row">5 км</div>
                                 <div class="table-row">Новорязанское шоссе</div>
                                 <div class="table-row"></div>
                                 <div class="table-row"></div>
                                 <div class="table-row row-green-bg border-top-row"></div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg">НДС не включен</div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg border-bottom-row">р. 1440</div>
                                 <div class="table-row last-row"></div>
                              </div>
                              <div class="col">
                                 <div class="title-row">Черная Грязь</div>
                                 <div class="table-row">8244</div>
                                 <div class="table-row">июнь 22</div>
                                 <div class="table-row">A-класс</div>
                                 <div class="table-row">32000</div>
                                 <div class="table-row big-row">МО, Котельники, Яничкин проезд, 2</div>
                                 <div class="table-row">5 км</div>
                                 <div class="table-row">Новорязанское шоссе</div>
                                 <div class="table-row"></div>
                                 <div class="table-row"></div>
                                 <div class="table-row row-green-bg border-top-row"></div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg">НДС не включен</div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg border-bottom-row">р. 1440</div>
                                 <div class="table-row last-row"></div>
                              </div>
                              <div class="col">
                                 <div class="title-row">Черная Грязь</div>
                                 <div class="table-row">8244</div>
                                 <div class="table-row">июнь 22</div>
                                 <div class="table-row">A-класс</div>
                                 <div class="table-row">32000</div>
                                 <div class="table-row big-row">МО, Котельники, Яничкин проезд, 2</div>
                                 <div class="table-row">5 км</div>
                                 <div class="table-row">Новорязанское шоссе</div>
                                 <div class="table-row"></div>
                                 <div class="table-row"></div>
                                 <div class="table-row row-green-bg border-top-row"></div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg">НДС не включен</div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg border-bottom-row">р. 1440</div>
                                 <div class="table-row last-row"></div>
                              </div>
                              <div class="col">
                                 <div class="title-row">Черная Грязь</div>
                                 <div class="table-row">8244</div>
                                 <div class="table-row">июнь 22</div>
                                 <div class="table-row">A-класс</div>
                                 <div class="table-row">32000</div>
                                 <div class="table-row big-row">МО, Котельники, Яничкин проезд, 2</div>
                                 <div class="table-row">5 км</div>
                                 <div class="table-row">Новорязанское шоссе</div>
                                 <div class="table-row"></div>
                                 <div class="table-row"></div>
                                 <div class="table-row row-green-bg border-top-row"></div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg">НДС не включен</div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg"></div>
                                 <div class="table-row row-green-bg border-bottom-row">р. 1440</div>
                                 <div class="table-row last-row"></div>
                              </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
        </>
    )
}

export default Table