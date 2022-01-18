import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: 'Built for SaaS',
        Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Crewcharge is built from the scratch up for marketers and developers to boost SAAS customer retention.
                It's easy to use with easy API, integration plugins, webhooks, and more.
            </>
        ),
    },
    {
        title: 'Privacy-First, Cookie-free',
        Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                We help companies stay PCI, GDPR, CGPA compliant. It's a
                entirely cookie-free alternative to tools like Google Analytics. We're one of the few companies that let
                companies self-host their data, because we don't sell our data to 3rd parties.
            </>
        ),
    },
    {
        title: 'Developers ♥😍 Crewcharge',
        Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Everything that can be accomplished through the UI of crewcharge, can also performed using APIs except
                account and project creation. Enjoy building your marketing automations!
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} alt={title}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
