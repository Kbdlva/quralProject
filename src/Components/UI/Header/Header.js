import "./Header.css";
import { useState } from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import logo from "../../../logo_blueText.svg"
import langWhiteIcon from "../../../Assets/icons/language-white.svg";
import langBlueIcon from "../../../Assets/icons/language-blue.svg";
import useWindowWidth from "../../../utils/useWindowWidth";
import mob from "./HeaderMobile.module.css"
import menu from '../../../Assets/icons/menu.svg'
import close from '../../../Assets/icons/close.svg'

function Header({changeLanguage, selectedLanguage}) {
    const [hoveredLang, setHoveredLang] = useState({});
    const width = useWindowWidth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const languages = [
        { code: "en", label: "English" },
        { code: "kk", label: "Қазақ" },
        { code: "ru", label: "Русский" },
    ];

    if (width < 400){
        return (
            <div>
                <div className={mob.wrap}>
                    <div
                        className={mob.logo}
                        onClick={() => navigate('/main')}
                    >
                        <img src={logo} alt={"logo"}/>
                        <p>Qural - Learning Management System</p>
                    </div>
                    <img
                        src={isMenuOpen? close: menu}
                        alt={"menu"}
                        className={mob.burger}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                </div>
                {isMenuOpen && (
                    <div className={mob.menu}>
                        <NavLink
                            to={"/price"}
                            className={({ isActive }) => isActive ? "active-link" : "link"}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Price
                        </NavLink>
                        <NavLink
                            to={"/faq"}
                            className={({ isActive }) => isActive ? "active-link" : "link"}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            FAQ
                        </NavLink>
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
                                                onClick={() => {
                                                    changeLanguage(lang.code);
                                                    setIsMenuOpen(false);
                                                }}
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
                )}
            </div>

        );
    }

    return (
        <header className="header">
            <div className={"logo__cname"}>
                <Link to={"/main"}>
                    <div className={"logo"}>
                        <img src={logo} alt="Company Logo"/>
                    </div>
                </Link>
                <Link to={"/main"} className={"no-underline"}>
                    <div className={"company__name"}>
                        Qural - Learning Management System
                    </div>
                </Link>
            </div>
            <div className={"links__lang"}>
                <div className={"links"}>
                    <NavLink to={"/price"} className={({ isActive }) => isActive ? "active-link" : "link"}>Price</NavLink>
                    <NavLink to={"/faq"} className={({ isActive }) => isActive ? "active-link" : "link"}>FAQ</NavLink>
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
                                        onClick={() => {
                                            changeLanguage(lang.code);
                                        }}
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