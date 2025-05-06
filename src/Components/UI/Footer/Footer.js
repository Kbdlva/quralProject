import "./Footer.css";
import React from "react";
import logo from "../../../Assets/logo-footer-fordark.svg"
import instagram from "../../../Assets/instagram.svg"
import telegram from "../../../Assets/telegram.svg"
import whatsapp from "../../../Assets/whatsapp.svg"
import {Link} from "react-router-dom";
import useWindowWidth from "../../../utils/useWindowWidth";
import mob from './FooterMobile.module.css'
 
function Footer() {
    const width = useWindowWidth()

    if (width < 400){
        return (
            <div className={mob.wrap}>
                <div className={mob.logo}>
                    <img src={logo} alt={"logo"}/>
                    QURAL – Platform for Effective Learning Management
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
                        Contacts
                    </span>
                    <p>
                        +7 (777) 777 77 77
                    </p>
                    <p>
                        sales@qural.kz
                    </p>
                </div>
                <div className={mob.media}>
                    <img src={instagram} alt={"instagram"}/>
                    <img src={telegram} alt={"telegram"}/>
                    <img src={whatsapp} alt={"whatsapp"}/>
                </div>
                <div className={mob.phone}>
                    <div className={mob.input}>
                        Phone number
                        <input
                            placeholder={"+7 (777) 777 77 77"}
                        />
                    </div>
                    <button>
                        Receive consultation
                    </button>
                </div>
                <div className={mob.boring}>
                    <p>Условия использования</p>
                    <p>Политика конфиденциальности</p>
                    <p>Договор оферты</p>
                </div>
            </div>
        );
    }
  return (
    <footer className="footer">
      <div className="footer-logo">
      <img src={logo} alt="Company Logo"/>
        <p>QURAL – Platform for Effective Learning Management.</p>
        <div className="media">
            <img src={instagram} alt="instagram"/>
            <img src={telegram} alt="telegram"/>
            <img src={whatsapp} alt="whatsapp"/>
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
                    <li className="mini-title">Contacts</li> 
                    <li><Link to="/terms">+7 (777) 777 77 77</Link></li>
                    <li><Link to="/contact">sales.@qural.kz</Link></li>
                </ul>
            </div>
            </div>
            <div className="input-container">
                <p>Phone number</p>
                <input type="tel" placeholder="+7 (777) 777 77 77" className="number-input"></input>
                <button className="submit-btn">Receive consultation</button>
            </div>
            </div>


            <div className="info-down">
          <ul className="footer-links"> 
            <li><a href="/terms">Условия использования</a></li>
            <li><a href="/policy">Политика конфиденциальности</a></li>
            <li><a href="/contract">Договор оферты</a></li>
          </ul>
          </div>
          
        </div>
      
    </footer>
  );
}

export default Footer;


