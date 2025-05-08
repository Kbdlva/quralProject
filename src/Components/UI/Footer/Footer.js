import "./Footer.css";
import React, {useEffect, useState} from "react";
import logo from "../../../Assets/logo-footer-fordark.svg"
import instagram from "../../../Assets/instagram.svg"
import telegram from "../../../Assets/telegram.svg"
import whatsapp from "../../../Assets/whatsapp.svg"
import {Link} from "react-router-dom";
import useWindowWidth from "../../../utils/useWindowWidth";
import mob from './FooterMobile.module.css'
import translations from "../../../utils/translates";

function Footer() {
    const lang = localStorage.getItem("lang") || "en";
    const t = translations[lang] || translations["en"];
    const width = useWindowWidth();

    if (width < 400){
        return (
            <div className={mob.wrap}>
                <div className={mob.logo}>
                    <img src={logo} alt={"logo"}/>
                    {t.qural_tagline}
                </div>
                <div className={mob.links}>
                    <span>
                        Qural
                    </span>
                    <Link to={"/price"} className={mob.link}>Price</Link>
                    <Link to={"/faq"} className={mob.link}>FAQ</Link>
                </div>
                <div className={mob.links}>
                    <span>
                        {t.contacts}
                    </span>
                    <p>
                        +7 (777) 777 77 77
                    </p>
                    <p>
                        sales@qural.kz
                    </p>
                </div>
                <div className={mob.media}>
                    <img
                        src={instagram}
                        alt={"instagram"}
                        onClick={() => {
                            const url = 'https://www.instagram.com/braizyhead?igsh=MTU4NjV4eTFhanVoag%3D%3D&utm_source=qr';
                            window.open(url, '_blank');
                        }}
                    />
                    <img
                        src={telegram}
                        alt={"telegram"}
                        onClick={() => {
                            const telegramUsername = 'braizyhead';
                            const url = `https://t.me/${telegramUsername}`;
                            window.open(url, '_blank');
                        }}
                    />
                    <img
                        src={whatsapp}
                        alt={"whatsapp"}
                        onClick={() => {
                            const phone = '77718447355';
                            const message = encodeURIComponent('Здравствуйте! Я хочу узнать подробнее о вашей платформе.');
                            const url = `https://wa.me/${phone}?text=${message}`;
                            window.open(url, '_blank');
                        }}
                    />
                </div>
                <div className={mob.phone}>
                    <div className={mob.input}>
                        {t.phone_number}
                        <input
                            type="tel"
                            placeholder={"+7 (777) 777 77 77"}
                        />
                    </div>
                    <button>
                        {t.receive_consultation}
                    </button>
                </div>
            </div>
        );
    }
  return (
    <footer className="footer">
      <div className="footer-logo">
      <img src={logo} alt="Company Logo"/>
        <p>{t.qural_tagline || "newddadsdffF"}</p>
        <div className="media">
            <img
                src={instagram}
                alt="instagram"
                onClick={() => {
                    const url = 'https://www.instagram.com/braizyhead?igsh=MTU4NjV4eTFhanVoag%3D%3D&utm_source=qr';
                    window.open(url, '_blank');
                }}
            />
            <img
                src={telegram}
                alt="telegram"
                onClick={() => {
                    const telegramUsername = 'braizyhead';
                    const url = `https://t.me/${telegramUsername}`;
                    window.open(url, '_blank');
                }}
            />
            <img
                src={whatsapp}
                alt="whatsapp"
                onClick={() => {
                    const phone = '77718447355';
                    const message = encodeURIComponent('Здравствуйте! Я хочу узнать подробнее о вашей платформе.');
                    const url = `https://wa.me/${phone}?text=${message}`;
                    window.open(url, '_blank');
                }}
            />
        </div>

        </div>
        <div className="info">
            <div className="horizonal">
            <div className="info-upper">
            <div className="info-left">
                <ul className="footer-links">
                    <li className="mini-title">Qural</li>
                    <Link to={"/price"} className={"link"}>Price</Link>
                    <Link to={"/faq"} className={"link"}>FAQ</Link>
                </ul>
          </div>
          <div className="info-right">
                <ul className="footer-links">
                    <li className="mini-title">{t.contacts}</li>
                    <li><Link to="/terms">+7 (777) 777 77 77</Link></li>
                    <li><Link to="/contact">sales.@qural.kz</Link></li>
                </ul>
            </div>
            </div>
            <div className="input-container">
                <p>{t.phone_number}</p>
                <input type="tel" placeholder="+7 (777) 777 77 77" className="number-input"></input>
                <button className="submit-btn">{t.receive_consultation}</button>
            </div>
            </div>


            <div className="info-down">
          </div>

        </div>

    </footer>
  );
}

export default Footer;


