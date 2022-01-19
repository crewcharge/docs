// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
        title: 'Crewcharge',
        tagline: 'SaaS Customer Retention Tool Crewcharge Documentation APIs',
        url: 'https://docs.crewcharge.com',
        baseUrl: '/',
        onBrokenLinks: 'throw',
        onBrokenMarkdownLinks: 'warn',
        favicon: 'img/favicon.ico',
        organizationName: 'crewcharge', // Usually your GitHub org/user name.
        projectName: 'docs', // Usually your repo name.

        presets: [
            [
                'classic',
                /** @type {import('@docusaurus/preset-classic').Options} */
                ({
                    docs: {
                        path: 'docs',
                        routeBasePath: 'docs',
                        sidebarPath: require.resolve('./sidebars.js'),
                        // Please change this to your repo.
                        editUrl: 'https://github.com/crewcharge/docs/',
                    },
                    blog: false,
                    theme: {
                        customCss: require.resolve('./src/css/custom.css'),
                    },
                }),
            ],
        ],
        plugins: [
            [
                '@docusaurus/plugin-content-docs',
                {
                    id: 'api',
                    path: 'api',
                    routeBasePath: 'api',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // ... other options
                },
            ]
        ],

        themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            ({
                navbar: {
                    title: 'Crewcharge Docs',
                    logo: {
                        alt: 'Crewcharge Logo',
                        src: 'https://www.crewcharge.com/images/logo.svg',
                    },
                    items: [
                        {
                            type: 'doc',
                            docId: 'intro',
                            position: 'left',
                            label: 'Tutorial',
                        },
                        {
                            to: '/api/intro',    // ./docs-api/Intro.md
                            label: 'API',
                            position: 'left',
                            activeBaseRegex: `/api/`,
                        },
                        {
                            href: 'https://github.com/crewcharge/docs',
                            label: 'GitHub',
                            position: 'right',
                        },
                    ],
                },
                footer: {
                    style: 'dark',
                    links: [
                        {
                            title: 'Docs',
                            items: [
                                {
                                    label: 'Tutorial',
                                    to: '/docs/intro',
                                },
                            ],
                        },
                        {
                            title: 'Community',
                            items: [
                                {
                                    label: 'Linkedin',
                                    href: 'https://www.linkedin.com/company/crewcharge',
                                },
                                {
                                    label: 'Twitter',
                                    href: 'https://twitter.com/crewcharge',
                                },
                            ],
                        },
                        {
                            title: 'More',
                            items: [
                                {
                                    label: 'Blog',
                                    to: 'https://crewcharge.medium.com',
                                },
                                {
                                    label: 'GitHub',
                                    href: 'https://github.com/crewcharge/docs',
                                },
                            ],
                        },
                    ],
                    copyright: `Copyright © ${new Date().getFullYear()} Crewcharge.`,
                },
                prism: {
                    theme: lightCodeTheme,
                    darkTheme: darkCodeTheme,
                },
            }),
    }
;

module.exports = config;
