import "./Footer.css";
import React from "react";
import logo from "../../../Assets/logo-footer-fordark.svg"
import instagram from "../../../Assets/instagram.png"
import telegram from "../../../Assets/telegram.png"
import whatsapp from "../../../Assets/whatsapp.png"
import {Link} from "react-router-dom";

 
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
      <img src={logo} alt="Company Logo"/>
        <p>QURAL – Platform for Effective Learning Management.</p>
        <div className="media">
            <div className="media-container">
                <img src={instagram} alt="instagram"></img>
            </div>
            <div className="media-container">
                <img src={telegram} alt="telegram"></img>
            </div>
            <div className="media-container">
                <img src={whatsapp} alt="whatsapp"></img>
            </div>
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


