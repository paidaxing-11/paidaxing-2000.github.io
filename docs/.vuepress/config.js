module.exports = {
    base: '/paidaxing/',
    // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    title: '执迷的首页',
    theme: 'reco',
    // meta 中的描述文字，用于SEO
    description: '学习笔记',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link',
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
            { rel: 'icon', href: '/digDug.png' }

        ],
    ],
    themeConfig: {
        //网页顶端导航栏左上角的图标
        logo: '/digDug.png',

        //顶部导航栏
        nav: [
            //格式一：直接跳转，'/'为不添加路由，跳转至首页
            {
                text: '前端', link: '/',
                items: [
                    { text: 'html', link: '/pages/html/index.md' },
                    //点击标签会跳转至link的markdown文件生成的页面
                    { text: 'css', link: '/pages/css/index.md' },
                ]
            },

            //格式二：添加下拉菜单，link指向的文件路径
            {
                text: '面试',  //默认显示
                ariaLabel: '分类',   //用于识别的label
                items: [
                    { text: 'html', link: '/pages/html/index.md' },
                    //点击标签会跳转至link的markdown文件生成的页面
                    { text: 'css', link: '/pages/css/index.md' },
                ]
            },
            { text: '项目', link: '/pages/html/test.md' },

            //格式三：跳转至外部网页，需http/https前缀
            { text: 'Github', link: 'https://github.com/paidaxing-2000' },
        ],

        //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
        sidebar: {
            '/pages/html/': [
                {
                    title: '基础知识',   // 一级菜单名称
                    collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                    sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                    children: [
                        ['test1.md', '文件命名'],  //菜单名称为'子菜单1'，跳转至/pages/html/index.md
                        ['test3.md', '子菜单2']
                    ]
                },
                {
                    title: '文件命名',
                    collapsable: false,
                    children: [
                        ['test2.md', '子菜单1']
                    ]
                }
            ],
            '/pages/css/': [
                {
                    title: '选择器',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        ['test.md', '子菜单1'],
                        ['test3.md', '子菜单2']
                    ]
                },
                {
                    title: '测试菜单2',
                    collapsable: false,
                    children: [
                        ['test2.md', '子菜单1']
                    ]
                }
            ],

        }
    },
    plugins: [[
        "@vuepress-reco/vuepress-plugin-kan-ban-niang",
        {
            theme: ["blackCat"],
            clean: true,
            modelStyle: {
                position: "fixed",
                left: "0px",
                bottom: "0px",
                opacity: "0.9",
                zIndex: 99999
            }
        }
    ]]

}