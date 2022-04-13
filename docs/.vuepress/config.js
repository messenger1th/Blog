const plugins = require('./config/plugins.js');
const nav = require('./nav.js');

module.exports = {
    base: '/blog/',
    title: 'Epoch',
    description: 'Epoch BLog',



    head: [
        //网站窗口图标ICON
        ['meta', { name: 'author', content: 'Epoch' }],
        ['meta', { name: 'keywords', content: 'Epoch\s Blog Basted On VuePress.' }],
        ['link', { rel: 'icon', href: './logo.ico' }],
    ],
    plugins: plugins,
    themeConfig: {
        //LOGO：页面左上角头像
        logo: './assets/img/logo.png',
        //导航栏，网站右上角
        nav: nav,
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

/* 给不同文件夹设置sideBar
sidebar: {
    '/Life/': [
        'life1',
        'life2',
        'life3',
    ],
    // fallback
    '/': [
        '', 
    ],
},
*/