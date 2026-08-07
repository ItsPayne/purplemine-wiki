import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    lang: 'ru-RU',
    title: 'PurpleMine Wiki',
    description: 'Общая база знаний Майнкрафт сервера PurpleMine.',

    themeConfig: {
        nav: [
            { text: 'Главная', link: '/' },
            { text: 'Начало', link: '/guide' },
            { text: 'Telegram', link: 'https://t.me/purpleminemc' },
            { text: 'Discord', link: 'https://discord.gg/...' }
        ],
        sidebar: [
            {
                text: 'Введение',
                items: [
                    { text: 'Что такое PurpleMine', link: '/introduction/what-is-purplemine' },
                    { text: 'FAQ', link: '/introduction/faq' }
                ]
            }
        ]
    }
})