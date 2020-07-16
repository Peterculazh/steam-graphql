import "./header.sass";
import Link from 'next/link';

const Header = () => {
    return <header>
        <div className="container">
            <Link href="/">
                <a>
                    <img src="./logo.png" className="header-logo" />
                </a>
            </Link>
        </div>
    </header>
}


export default Header;