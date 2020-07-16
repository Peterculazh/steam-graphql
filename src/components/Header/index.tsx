import "./header.sass";
import Link from 'next/link';

interface IHeaderProps {
    className?: string;
}

const Header = (props: IHeaderProps) => {
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
        </div>
    </header>
}


export default Header;