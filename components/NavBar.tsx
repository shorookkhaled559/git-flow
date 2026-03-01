import React from 'react';
import styles from './NavBar.module.css';
import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}><Link href="/">Home</Link></li>
                <li className={styles.navItem}><Link href="/about">About</Link></li>
                <li className={styles.navItem}><Link href="/feature">Feature</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;