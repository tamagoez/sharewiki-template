module.exports = {
  title: 'ShareWiki',
  tagline: "Let's share you knowledge!",
  url: 'https://sharewiki.vercel.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'sharewiki', // Usually your GitHub org/user name.
  projectName: 'sharewiki', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'G-FSD3ZEV6FP',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: 'ShareWiki',
      logo: {
        alt: 'ShareWiki Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/sharewiki',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/hHE3Em35K3',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/share_wiki',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tabascoes/sharewiki',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ShareWiki. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/tabascoes/sharewiki/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/tabascoes/sharewiki/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
