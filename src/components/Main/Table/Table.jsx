import React from "react";
import "./table.css"

const Table = (props) => {
    if (!props.catalog) {
        return null
    }
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
                        <div className="first-col">
                           <div className="title-row">Объект</div>
                           <div className="table-row">ID в базе</div>
                           <div className="table-row">Дата ввода/освобождения</div>
                           <div className="table-row">Класс склада</div>
                           <div className="table-row">Площадь объекта, м2</div>
                           <div className="table-row">Адрес объекта</div>
                           <div className="table-row">Расстояние от МКАД, км</div>
                           <div className="table-row">Направление</div>
                           <div className="table-row">Рабочая высота потолков</div>
                           <div className="table-row">Ворота</div>
                           <div className="table-row row-green-bg border-top-row">Цена аренды итого, руб/мес</div>
                           <div className="table-row row-green-bg">Ставка ALL IN (вкл OPEX), руб/м2/г</div>
                           <div className="table-row row-green-bg">Ставка ALL IN, руб/м2/месяц</div>
                           <div className="table-row row-green-bg">Налогообложение (НДС/УСН)</div>
                           <div className="table-row row-green-bg">Комм. услуги</div>
                           <div className="table-row row-green-bg">Tripple Net, руб/м2/год</div>
                           <div className="table-row row-green-bg border-bottom-row">OPEX, руб/м2/год</div>
                           <div className="table-row last-row">Ссылка на сайт/презу</div>
                        </div>
                        <div className="scroll-content">
                           <div className="wrap-scroll">
                           {props.catalog.map(( key, value )  => { 
                                console.log(key)
                                return (
                              <div className="col">
                                 <div className="title-row">{ key["hz_building_name_obj"] }</div>
                                 <div className="table-row">{ key["ID"] }</div>
                                 <div className="table-row">{ key["hz_building_available_from"] }</div>
                                 <div className="table-row">{ key["hz_class"] }</div>
                                 <div className="table-row">40 000 м2</div>
                                 <div className="table-row big-row">{ key["address"] }</div>
                                 <div className="table-row">{ key["hz_building_distance"] }30 км</div>
                                 <div className="table-row">{ key["hz_roads"] }Новорязанское шоссе</div>
                                 <div className="table-row">{ key["ID"] }</div>
                                 <div className="table-row">{ key["ID"] }</div>
                                 <div className="table-row row-green-bg border-top-row">{ key["hz_building_rent_price_month_from"] }</div>
                                 <div className="table-row row-green-bg">{ key["hz_building_price_all_in"] }</div>
                                 <div className="table-row row-green-bg">{ key["ID"] }</div>
                                 <div className="table-row row-green-bg">{ key["hz_building_tax"] }</div>
                                 <div className="table-row row-green-bg">{ key["hz_building_pay_utilities"] }</div>
                                 <div className="table-row row-green-bg">{ key["hz_building_opex"] }</div>
                                 <div className="table-row row-green-bg border-bottom-row">{ key["hz_building_opex"] }не включен, н/д</div>
                                 <div className="table-row last-row"></div>
                              </div>
                                )
                            }
                            )}
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