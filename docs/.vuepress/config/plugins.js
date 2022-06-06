const secret = require('./secret.js');

module.exports = {
    //comment plugins
    '@vssue/vuepress-plugin-vssue': {
        // set `platform` rather than `api`
        platform: 'github-v4',

        // all other options of Vssue are allowed
        owner: 'messenger1th',
        repo: 'blog',
        clientId: secret.clientId, //remeber to hint privacy information 
        clientSecret: secret.clientSecret, //modify the .gitignore file
    },
    'vuepress-plugin-auto-sidebar': {
        title: {
            mode: "titlecase",
            map: {}
        },
        collapse: {
            open: true,
        },
    },
}