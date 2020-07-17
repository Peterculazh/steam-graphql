import "./header.sass";
import Link from 'next/link';
import { useState } from 'react';
import MobileHeaderMenuLi from "./header-menu-li";

interface IHeaderProps {
    className?: string;
}

const Header = (props: IHeaderProps) => {
    const [openMenu, setOpenMenu] = useState(false);
    const { className } = props;
    return <header className="header-wrapper-default">
        <div className={`container header-container${className ? className : ''}`}>
            <Link href="/">
                <a className="header-logo">
                    <img src="./logo.png" />
                </a>
            </Link>

            <nav className="header-desktop-menu">
                <ul>
                    <li className="parent">
                        <a href="/">Store</a>
                        <ul>
                            <li>Featured</li>
                            <li>By categories</li>
                        </ul>
                    </li>
                    <li className="parent">
                        <a href="/">Community</a>
                        <ul>
                            <li>Current Players</li>
                            <li>Popular games</li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <nav className="header-mobile-menu">
                <button
                    className={`hamburger hamburger--arrowalt header-hamburger ${openMenu ? 'is-active' : ''}`}
                    onClick={() => setOpenMenu(true)}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <div className={`header-mobile-menu-container ${openMenu ? 'is-active' : ''}`}>
                    <div className={`header-mobile-menu-content ${openMenu ? 'is-active' : ''}`}>
                        <ul>
                            <MobileHeaderMenuLi
                                href="/"
                                label="Store"
                                isParent={true}
                                children={[
                                    {
                                        href: "/",
                                        label: "Test"
                                    }
                                ]}
                            />
                            <MobileHeaderMenuLi
                                href="/"
                                label="Community"
                            />
                        </ul>
                    </div>
                    <div className="header-mobile-menu-overlay"
                        onClick={() => setOpenMenu(false)}></div>
                </div>
            </nav>
        </div>
    </header>
}


export default Header;