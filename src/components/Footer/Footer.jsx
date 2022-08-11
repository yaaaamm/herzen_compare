import React from "react";
import "./footer.css"


const Footer = () => {
    return (
        <>
             <footer className="footer">
                <div className="footer__container">
                    <div className="footer__row">
                    <div className="footer__col">
                        <a className="footer__logo" href="/"
                            ><img className="footer__logo-img" src="https://herzen.biz/wp-content/themes/tomasnet/assets/images/logo_white.png" alt=""
                        /></a>
                        <div className="footer__about">
                            Команда Herzen готова к&nbsp;решению самых сложных профессиональных задач, благодаря умелому сочетанию брокерских,
                            IT&nbsp;и&nbsp;маркетинговых инструментов.<br />Нас отличает современный подход к&nbsp;ведению бизнеса и&nbsp;чувство стиля.
                        </div>
               </div>
               <div className="footer__col">
                  <div className="footer__title">Контакты</div>
                  <div className="footer__contacts">
                     <div className="footer__contacts-item">
                        <img className="footer__contacts-icon" src="https://herzen.biz/wp-content/themes/tomasnet/assets/images/email.png" alt="" /><a
                           className="footer__contacts-link"
                           href="mailto:Sklad@herzen.biz"
                           >Sklad@herzen.biz</a
                        >
                     </div>
                     <div className="footer__contacts-item">
                        <img className="footer__contacts-icon" src="https://herzen.biz/wp-content/themes/tomasnet/assets/images/home.png" alt="" />
                        <div className="footer__contacts-text">г. Балашиха, Ш. Энтузиастов вл. 1А, стр. 3Б</div>
                     </div>
                     <div className="footer__contacts-item">
                        <img
                           className="footer__contacts-icon"
                           src="https://herzen.biz/wp-content/themes/tomasnet/assets/images/phone_white.png"
                           alt=""
                        /><a className="footer__contacts-link" href="tel:+74959955871">8 (495) 99-55-871</a>
                     </div>
                     <div className="footer__contacts-item">
                        <img
                           className="footer__contacts-icon"
                           src="https://herzen.biz/wp-content/themes/tomasnet/assets/images/whatsapp_white.png"
                           alt=""
                        /><a className="footer__contacts-link" href="https://wa.me/79255849894">+7 925 584-98-94</a>
                     </div>
                     <div className="footer__contacts-item">
                        <img className="footer__contacts-icon" src="https://herzen.biz/wp-content/themes/tomasnet/assets/images/time.png" alt="" /><a
                           className="footer__contacts-text"
                           >Пн-Пт: 9:00-19:00; Cб-Вс: Выходной</a
                        >
                     </div>
                  </div>
               </div>
               <div className="footer__col">
                  <div className="footer__title">Полезная информация</div>
                  <nav className="footer__nav">
                     <a className="footer__nav-link" href="/hz-catalog/">База недвижимости</a
                     ><a className="footer__nav-link" href="/sobstvennikam-2/">Собственникам</a
                     ><a className="footer__nav-link" href="/arendatoram/">Арендаторам</a><a className="footer__nav-link" href="/kontakty/">О нас</a>
                  </nav>
               </div>
            </div>
            <div className="footer__row">
               <div className="footer__copyrights">© Herzen 2014-2022</div>
               <div className="footer__privacy">
                  <a className="footer__privacy-link" href="https://herzen.biz/wp-content/uploads/2022/06/ПОЛЬЗОВАТЕЛЬСКОЕ_СОГЛАШЕНИЕ.pdf"
                     >Пользовательское соглашение</a
                  >
                  <a className="footer__privacy-link" href="https://herzen.biz/wp-content/uploads/2022/06/Политика-конфиденциальности-HERZEN.pdf"
                     >Политика конфиденциальности</a
                  >
                  <a className="footer__privacy-link" href="https://herzen.biz/wp-content/uploads/2022/06/Согласие-на-обработку-персональных-данных.pdf"
                     >Согласие на обработку персональных данных</a
                  >
               </div>
            </div>
         </div>
      </footer>
 
        </>
    )
}

export default Footer