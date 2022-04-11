module.exports = {

    title: 'Epoch',
    description: 'Epoch111',
    themeConfig: {
        //LOGO：网站左上角头像
        logo: '/assets/img/logo.png',
        head: [
            //图标ICO
            ['meta', { name: 'author', content: 'Epoch' }],
            ['meta', { name: 'keywords', content: 'Epoch\s Blog Basted On VuePress.' }],
            ['link', { rel: 'icon', href: '/favicon.ico' }],
        ],
        //导航栏，网站右上角
        nav: [
            { text: 'Home', link: '/' },
            { text: 'External', link: 'https://google.com' },
        ],
        subSidebar: 'auto',
        //侧边栏，为不同的文件夹而设置
        sidebar: {
            '/Life/': [
                'life1',
                'life2',
                'life3',
            ],
            // fallback
            '/': [
                '', /* / */
                'contact', /* /contact.html */
                'about' /* /about.html */
            ],
            '/Data Structure And Algorithm/': [
                '/Data Structure And Algorithm/CPP',
                '/Data Structure And Algorithm/Milestone',
            ]
        },
        lastUpdated: 'Last Updated',
    }
}

/*
//全局侧边栏分组
sidebar
{
                title: 'Study',
                path: '/Study/',
                children: [
                    // '/Study/',
                ],
            },
            {
                title: 'Life',
                path: '/Life/',
                children: [
                    // '/Life/',
                    '/Life/what is life'
                ],
            }

*/