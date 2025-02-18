import "./Header.css";
import { useState } from "react";
import {Link, NavLink} from "react-router-dom";
import logo from "../../../logo_blueText.svg"
import langWhiteIcon from "../../../Assets/icons/language-white.svg";
import langBlueIcon from "../../../Assets/icons/language-blue.svg";

function Header() {
    const [selectedLanguage, setSelectedLanguage] = useState("en");

    const languages = [
        { code: "en", label: "English" },
        { code: "kk", label: "Қазақ" },
        { code: "ru", label: "Русский" },
    ];

    const [hoveredLang, setHoveredLang] = useState({}); 

    return (
        <header className="header">
            <div className={"logo__cname"}>
                <div className={"logo"}>
                    <img src={logo} alt="Company Logo"/>
                </div>
                <div className={"company__name"}>
                    Qural - Learning Management System
                </div>
            </div>
            <div className={"links__lang"}>
                <div className={"links"}>
                    <NavLink
                        to={"/price"}
                        className={({ isActive }) => isActive ? "active-link" : "link"}
                    >
                        Price
                    </NavLink>
                    <NavLink
                        to={"/faq"}
                        className={({ isActive }) => isActive ? "active-link" : "link"}
                    >
                        FAQ
                    </NavLink>
                </div>


               <div className="custom-dropdown">
                    <button className="dropdown-btn">
                    <img src={langWhiteIcon} alt="Language Icon" className="lang-icon" />
                        {languages.find(lang => lang.code === selectedLanguage)?.label}
                    </button>
                    <ul className="dropdown-menu">
            {languages
              .filter((lang) => lang.code !== selectedLanguage)
              .map((lang) => {
                const isHovered = hoveredLang[lang.code] ?? false; 
                return (
                  <li
                    key={lang.code}
                    onClick={() => setSelectedLanguage(lang.code)}
                    onMouseEnter={() =>
                      setHoveredLang((prev) => ({ ...prev, [lang.code]: true }))
                    }
                    onMouseLeave={() =>
                      setHoveredLang((prev) => ({ ...prev, [lang.code]: false }))
                    }
                  >
                    <img
                      src={isHovered ? langWhiteIcon : langBlueIcon}
                      alt="Language Icon"
                      className="lang-icon"
                    />
                    {lang.label}
                  </li>
                );
              })}
          </ul>
                </div>
            </div>
        </header>
    );
}


export default Header;