import "./Header.css";
import {Link} from "react-router-dom";
import logo from "../../../diploma__logo.svg"

function Header() {
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
                    <Link to={"/price"} className={"link"}>Price</Link>
                    <Link to={"/faq"} className={"link"}>FAQ</Link>
                </div>
                <div className={"language"}>

                </div>
            </div>

            <nav>
                <ul>
                    <button>English</button>
                </ul>
            </nav>
        </header>
    );
}


export default Header;