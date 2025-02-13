import "./Header.css";

function Header() {
    return (
        <header className="header">
            <img src="logo.png" alt="Company Logo" className="logo" />
            <nav>
                <ul>
                    <li><a href="/src/pages">Price</a></li>
                    <li><a href="/about">FAQ</a></li>
                    <button>English</button>
                </ul>
            </nav>
        </header>
    );
}


export default Header;