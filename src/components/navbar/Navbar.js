import Link from "next/link";

import { navbar, menu, menuItem } from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={navbar}>
            <ul className={menu}>
                <li className={menuItem}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
