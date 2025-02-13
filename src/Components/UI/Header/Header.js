import "./Header.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <img src="logo.png" alt="Company Logo" className="logo" />
            <nav>
                <ul>
                    <li><Link to={"/price"}>Price</Link></li>
                    <li><Link to={"/faq"}>FAQ</Link></li>
                    <button>English</button>
                </ul>
            </nav>
        </header>
    );
}


export default Header;