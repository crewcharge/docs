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
        onBrokenLinks: 'warn',
        onBrokenMarkdownLinks: 'warn',
        favicon: 'img/favicon.ico',
        organizationName: 'crewcharge', // Usually your GitHub org/user name.
        projectName: 'docs', // Usually your repo name.
        scripts: [
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
                async: true,
            },
            {
                src: 'https://www.crewcharge.com/v1/logger.js',
                async: true,
            },
            {
                src: '/clarity.js',
                async: true,
            }
        ],
        presets: [
            [
                'classic',
                /** @type {import('@docusaurus/preset-classic').Options} */
                ({
                    docs: {
                        path: 'docs',
                        routeBasePath: '/',
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
            ],
            [
                '@docusaurus/plugin-content-docs',
                {
                    id: 'integration',
                    path: 'integration',
                    routeBasePath: 'integration',
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
                            to: '/integration/intro', // ./docs-api/Intro.md
                            label: 'Integration',
                            position: 'left',
                            activeBaseRegex: `/integration/`,
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
                            title: 'Quick Links',
                            items: [
                                {
                                    label: 'Customer Retention Tool',
                                    to: 'https://www.crewcharge.com',
                                },
                                {
                                    label: 'Tutorial',
                                    to: '/docs/intro',
                                },

                                {
                                    label: 'Integration',
                                    to: '/integration/intro',
                                },

                                {
                                    label: 'API',
                                    to: '/api/intro',
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
