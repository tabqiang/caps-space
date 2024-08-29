import { defineConfig, type DefaultTheme } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Caps Space',
    description: 'A Caps Space Components Doc',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: nav(),
        search: {
            provider: 'local',
        },

        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'What is', link: 'guide/what-is' },
                    { text: 'Getting Started', link: 'guide/getting-started' },
                ],
            },
        ],

        socialLinks: [{ icon: 'github', link: 'https://github.com/tabqiang/caps-space' }],
    },
});

function nav(): DefaultTheme.NavItem[] {
    return [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: 'guide/what-is', activeMatch: '/guide/' },
    ];
}
