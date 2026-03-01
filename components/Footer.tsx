// ...existing code...
import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import Feature from './../app/(public)/feature/page';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.logo}>Git Flow</span>
          <small className={styles.tagline}>Building better git workflows</small>
        </div>

        <nav className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/feature">Feature</Link>
        </nav>

        <div className={styles.social}>
          <a
            href="https://github.com"
            aria-label="GitHub"
            className={styles.icon}
            target="_blank"
            rel="noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.41-1.27.75-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.09-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.18a11.1 11.1 0 012.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.65.23 2.87.11 3.17.75.8 1.2 1.83 1.2 3.09 0 4.43-2.7 5.41-5.27 5.69.42.36.8 1.09.8 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.copy}>© {year} Git flow. All rights reserved.</div>
    </footer>
  );
};

export default Footer;