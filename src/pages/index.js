import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import {Redirect} from '@docusaurus/router';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="">{siteConfig.title}</h1>
                <p className="">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--md"
                        to="/intro">
                        Increase my customer retention️
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    return (<Redirect to="/intro"/>)
}
