
import React from "react";
import "./styles.css"


const Map = (props) => {
    if (!props.catalog) {
        return null
    }
    console.log(props.catalog.hz_building_area_min)
    return (
        <>
            <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=1421b0cb-15b7-4f51-8084-81fb14e6fb7c" type="text/javascript"></script>
            <script src="icon_customImage.js" type="text/javascript"></script>
            <script>
            ymaps.ready(init);

                var myMap;

                function init () {
                    // Параметры карты можно задать в конструкторе.
                    myMap = new ymaps.Map(
                        // ID DOM-элемента, в который будет добавлена карта.
                        'map',
                        // Параметры карты.
                        {
                            // Географические координаты центра отображаемой карты.
                            center: [55.76, 37.64],
                            // Масштаб.
                            zoom: 10,
                        }, {
                            // Поиск по организациям.
                            searchControlProvider: 'yandex#search'
                        }
                    )
                }
            </script>
            
        </>
    )
}

export default Map