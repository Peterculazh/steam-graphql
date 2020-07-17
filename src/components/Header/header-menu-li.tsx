import { useState } from 'react';
import { FaArrowLeft } from "../Icons";

interface IHeaderMenuChildren {
    href: string;
    label: string;
}

interface IHeaderMenuLi {
    href: string;
    label: string;
    isParent?: boolean;
    children?: [IHeaderMenuChildren]
}

const MobileHeaderMenuLi = (props: IHeaderMenuLi) => {
    const [open, setOpen] = useState(false);
    const { href, label, isParent, children } = props;
    return (
        <li className={`${isParent ? 'parent' : ''} ${open ? 'is-active' : ''}`}>
            <div className="parent-container">
                <a href={href}>{label}</a>
                {isParent && <FaArrowLeft onClick={() => setOpen(!open)} />}
            </div>
            {isParent && children &&
                <ul>
                    {children.map((item: IHeaderMenuChildren) => <li key={item.label}>
                        <a href={item.href}>{item.label}</a>
                    </li>)}
                </ul>
            }
        </li>
    )
}

export default MobileHeaderMenuLi;