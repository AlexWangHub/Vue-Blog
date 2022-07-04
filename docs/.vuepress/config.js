const slidebar = null; //require('./config.sidebar')
const update = null;//require('./config.update')
module.exports = {
    title: 'Book奉告',
    base: '/blog/',
    dest: './web',
    description: '你好，我是BinbinWang，一位喜欢读书、做记录的iOS开发者。',

    head: [
        [
            'link',
            {
                rel: 'shortcut icon',
                href: '/favicon.ico',
                type: 'iamge/x-icon',
            },
        ],
        [
            'meta',
            {
                name: 'keywords',
                content: '技术博客 iOS开发 架构师 程序员 创新 木南之 冰以东',
            },
        ],
    ],

    shouldPreload: (file, type) => {
        // 基于文件扩展名的类型推断
        // if(type == 'script')
        return false
    },

    serviceWorker: true, // 是否开启 PWA
    themeConfig: {
        logo: '',
        repo: 'https://github.com/BinbinWang9/blog',
        sidebarDepth: 2,
        update: update,
        nav: [{
                text: '主页',
                link: '/',
            },
            {
                text: 'iOS开发',
                link: '/iosDev/',
            },
            {
                text: '技术方案',
                link: '/itPlan/',
            },
            {
                text: '全栈之路',
                items: [{
                        text: "前端",
                        link: "/stack/webFrame/"
                    },
                    {
                        text: "后台",
                        link: "/stack/server/"
                    },
                    {
                        text: "区块链",
                        link: "/stack/block/"
                    },
                    {
                        text: "算法",
                        link: "/stack/algorithm/"
                    },
                    {
                        text: "音视频",
                        link: "/stack/video/"
                    },
                    {
                        text: "职场思考",
                        link: "/stack/work/"
                    },
                ]
            },
            {
                text: '计算机基础',
                items: [{
                        text: "计算机网络",
                        link: "/computer/network/"
                    },
                    {
                        text: "计算机原理",
                        link: "/computer/principle/"
                    },
                    {
                        text: "编译原理",
                        link: "/computer/compile/"
                    },
                ]
            },
            {
                text: '兴趣领域',
                items: [{
                        text: "产品",
                        link: "/interests/product/"
                    },
                    {
                        text: "设计",
                        link: "/interests/design/"
                    },
                    {
                        text: "经济",
                        link: "/interests/economic/"
                    },
                    {
                        text: "英语",
                        link: "/interests/english/"
                    },
                    {
                        text: "电影",
                        link: "/interests/movie/"
                    },
                    {
                        text: "小计俩",
                        link: "/interests/trick/"
                    },
                    {
                        text: "书单列表",
                        link: "/interests/books/"
                    },
                ]
            },
            {
                text: '生活点滴',
                link: '/life/',
            },
        ],
        sidebar: slidebar,
    },

    // 插件
    plugins: [
        ['@vuepress/medium-zoom'],
        ['@vuepress/back-to-top'], // 返回顶部
        [
            '@vuepress/active-header-links',
            {
                // 页面滚动时自定激活侧边栏链接
                sidebarLinkSelector: '.sidebar-link',
                headerAnchorSelector: '.header-anchor',
            },
        ],
        ['@vuepress/nprogress'],
        require('./common-plugin.js'),
    ],

    chainWebpack: (config, isServer) => {
        // 去除打包后文件的预加载
        config.plugins.delete('html')
        config.plugins.delete('preload') // TODO: need test
        config.plugins.delete('prefetch') // TODO: need test
    },
}