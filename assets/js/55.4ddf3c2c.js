(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{220:function(t,e,r){"use strict";r.r(e);var s=r(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("在vue-cli 2.X的时候，也写过一篇类似的"),r("a",{attrs:{href:"https://juejin.im/post/597eee92f265da3e2e56e37c",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章"),r("OutboundLink")],1),t._v("，在八月份的时候vue-cli已经更新到了3.X，新版本的脚手架，功能灰常强大，试用过后非常喜欢，写篇教程来帮助各位踩一下坑。")]),t._v(" "),r("blockquote",[r("p",[t._v("游泳、健身了解一下："),r("a",{attrs:{href:"http://obkoro1.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"http://obkoro1.com/web_accumulate/accumulate/",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端积累文档"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://user-gold-cdn.xitu.io/2018/5/1/1631b6f52f7e7015?w=344&h=344&f=jpeg&s=8317",target:"_blank",rel:"noopener noreferrer"}},[t._v("公众号"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://github.com/OBKoro1",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),r("OutboundLink")],1)])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("hr"),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),r("p",[t._v("3.x需要在"),r("code",[t._v("Node.js")]),t._v("8.9或更高版本(推荐8.11.0+)，点击这里可以安装"),r("a",{attrs:{href:"http://nodejs.cn/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("node"),r("OutboundLink")],1)]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),r("p",[t._v("mac下，更新版本的时候,如果提示你权限不够：")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),r("p",[t._v("安装完扩展之后，可以随便找个文件夹建一个如下方示例的.vue文件,然后跑起来：")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),r("hr"),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),r("ul",[t._m(41),t._v(" "),r("li",[r("p",[t._v("之前写了篇"),r("a",{attrs:{href:"http://obkoro1.com/web_accumulate/accumulate/tool/Eslint%E8%87%AA%E5%8A%A8%E4%BF%AE%E5%A4%8D%E6%A0%BC%E5%BC%8F%E9%94%99%E8%AF%AF.html#vscode%E4%BF%9D%E5%AD%98%E6%97%B6%E8%87%AA%E5%8A%A8%E4%BF%AE%E5%A4%8Deslint%E9%94%99%E8%AF%AF",target:"_blank",rel:"noopener noreferrer"}},[t._v("VsCode保存时自动修复Eslint错误"),r("OutboundLink")],1),t._v("推荐一下。")]),t._v(" "),t._m(42)])]),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),r("p",[t._v("一起来看一下新项目的结构(下图),会发现2.x的webpack配置的目录不见了，也就是没有build、config这两个文件夹了：")]),t._v(" "),r("ul",[t._m(51),t._v(" "),t._m(52),t._v(" "),r("li",[r("p",[r("strong",[t._v("在自定义一下webpack的配置")]),t._v("，我们需要在"),t._m(53),t._v("，文件中应该导出一个对象，然后进行配置，详情查阅"),r("a",{attrs:{href:"https://cli.vuejs.org/zh/config/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),r("OutboundLink")],1)]),t._v(" "),t._m(54)]),t._v(" "),t._m(55)]),t._v(" "),t._m(56),t._v(" "),t._m(57),t._v(" "),r("hr"),t._v(" "),t._m(58),t._v(" "),t._m(59),t._v(" "),t._m(60),t._v(" "),t._m(61),t._v(" "),t._m(62),t._v(" "),t._m(63),t._v(" "),t._m(64),t._v(" "),r("p",[t._v("当我们点击hello -cli3项目，就会进入项目管理的界面")]),t._v(" "),t._m(65),t._v(" "),t._m(66),t._v(" "),t._m(67),t._v(" "),r("ul",[r("li",[r("p",[t._v("vue-cli3的插件功能，详情了解"),r("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/plugins-and-presets.html#%E6%8F%92%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),r("OutboundLink")],1)]),t._v(" "),t._m(68)]),t._v(" "),t._m(69)]),t._v(" "),t._m(70),t._v(" "),t._m(71),t._v(" "),t._m(72),t._v(" "),t._m(73),t._v(" "),t._m(74),t._v(" "),t._m(75),t._v(" "),t._m(76),t._v(" "),t._m(77),t._v(" "),r("hr"),t._v(" "),t._m(78),t._v(" "),t._m(79),t._v(" "),t._m(80),t._v(" "),r("p",[r("a",{attrs:{href:"http://obkoro1.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"http://obkoro1.com/web_accumulate/accumulate/",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端积累文档"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://user-gold-cdn.xitu.io/2018/5/1/1631b6f52f7e7015?w=344&h=344&f=jpeg&s=8317",target:"_blank",rel:"noopener noreferrer"}},[t._v("公众号"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://github.com/OBKoro1",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("以上2018.11.10")]),t._v(" "),r("p",[t._v("参考资料：")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-cli3官方文档"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://gitee.com/hjm100/codes/rjch7b31l4f59gt8suidn63",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-cli3.0搭建与配置"),r("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"一份超级详细的vue-cli3-0使用教程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一份超级详细的vue-cli3-0使用教程","aria-hidden":"true"}},[this._v("#")]),this._v(" 一份超级详细的Vue-cli3.0使用教程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"主要内容："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主要内容：","aria-hidden":"true"}},[this._v("#")]),this._v(" 主要内容：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("零配置启动/打包一个"),e("code",[this._v(".vue")]),this._v("文件")]),this._v(" "),e("li",[this._v("详细的搭建过程")]),this._v(" "),e("li",[e("strong",[this._v("重点推荐：使用图形化界面创建/管理/运行项目")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"安装："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装：","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"卸载旧版本："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载旧版本：","aria-hidden":"true"}},[this._v("#")]),this._v(" 卸载旧版本：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果你事先已经全局安装了旧版本的"),e("code",[this._v("vue-cli")]),this._v("(1.x 或 2.x),你需要先卸载它:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("npm uninstall vue-cli -g\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"node版本要求："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node版本要求：","aria-hidden":"true"}},[this._v("#")]),this._v(" Node版本要求：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("大多数人都安装过了node,使用下面的命令行"),e("strong",[this._v("查询你的node版本")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("node -v\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果你的版本不够，可以使用下面的命令行来把"),e("strong",[this._v("Node版本更新到最新的稳定版")]),this._v("：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("npm install -g n // 安装模块 这个模块是专门用来管理node.js版本的\nn stable // 更新你的node版本\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("sudo n stable // 我就遇到了\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"安装vue-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装vue-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装vue-cli:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("npm install -g @vue/cli // 安装cli3.x\nvue --version // 查询版本是否为3.x\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果cli3.x用的不舒服，"),e("strong",[this._v("cli3也能使用2.x模板")]),this._v("：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("npm install -g @vue/cli-init // 安装这个模块\n// 就可以使用2.x的模板：vue init webpack my-project\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"零配置启动-打包一个-vue文件："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#零配置启动-打包一个-vue文件：","aria-hidden":"true"}},[this._v("#")]),this._v(" 零配置启动/打包一个"),e("code",[this._v(".vue")]),this._v("文件：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"安装扩展："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装扩展：","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装扩展：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("npm install -g @vue/cli-service-global\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("vue serve App.vue // 启动服务\nvue build App.vue // 打包出生产环境的包并用来部署\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"如下图，只需一个-vue文件，就能迅速启动一个服务："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如下图，只需一个-vue文件，就能迅速启动一个服务：","aria-hidden":"true"}},[this._v("#")]),this._v(" 如下图，只需一个.vue文件，就能迅速启动一个服务：")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("如图所示，服务启动的时候回生成一个"),r("code",[t._v("node_modules")]),t._v("包，稍微测试了一下，"),r("strong",[t._v("服务支持ES6语法和热更新")]),t._v("，打包的时候会生成一个"),r("code",[t._v("dist")]),t._v("文件夹。(新建一个test.vue文件也只有一个"),r("code",[t._v("node_modules")]),t._v("/"),r("code",[t._v("dist")]),t._v("文件夹)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这是个很棒的功能，用于"),e("strong",[this._v("开发一个库、组件，做一些小demo等都是非常适合的")]),this._v("！")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/10/166fc87173c427ea?w=1672&h=1754&f=png&s=344139",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"第一次创建项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一次创建项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 第一次创建项目:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-命令行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令行","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 命令行:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("vue create hello-cli3 \n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("hello-cli3是文件夹名字，如果不存在会"),e("strong",[this._v("自动创建文件夹")]),this._v("，如果存在会安装到那个文件夹中。")])]),this._v(" "),e("li",[e("p",[this._v("相比2.x的时候需要自己手动创建一个文件夹，这里也算是一个小优化吧。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-选择模板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-选择模板","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 选择模板:")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("p",[t._v("一开始只有两个选项: "),r("code",[t._v("default")]),t._v("(默认配置)和"),r("code",[t._v("Manually select features")]),t._v("(手动配置)")]),t._v(" "),r("p",[t._v("默认配置只有"),r("code",[t._v("babel")]),t._v("和"),r("code",[t._v("eslint")]),t._v("其他的都要自己另外再配置，所以我们选第二项手动配置。")])]),t._v(" "),r("li",[r("p",[t._v("在每次选择手动配置之后，会询问你是否保存配置，也就是图片中的"),r("code",[t._v("koro")]),t._v("选项，这样以后我们在进行创建项目的时候"),r("strong",[t._v("只需使用原先的配置")]),t._v("就可以了，而不用再进行配置。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/10/166fca9d5b691cc3?w=507&h=82&f=png&s=10124",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-选择配置："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-选择配置：","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 选择配置：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("根据你的项目需要来选择配置,空格键是选中与取消，A键是全选")]),this._v(" "),e("pre",[e("code",[this._v("  ? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection) \n  // 检查项目所需的功能:(按<space>选择，<a>切换所有，<i>反转选择）\n  >( ) TypeScript                                 // 支持使用 TypeScript 书写源码\n   ( ) Progressive Web App (PWA) Support          // PWA 支持\n   ( ) Router                                     // 支持 vue-router\n   ( ) Vuex                                       // 支持 vuex\n   ( ) CSS Pre-processors                         // 支持 CSS 预处理器。\n   ( ) Linter / Formatter                         // 支持代码风格检查和格式化。\n   ( ) Unit Testing                               // 支持单元测试。\n   ( ) E2E Testing  \n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-选择css预处理器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-选择css预处理器","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 选择css预处理器:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("如果你选择了Css预处理器选项，会让你选择这个")]),this._v(" "),e("pre",[e("code",[this._v("  ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):\n  // 选择CSS预处理器（默认支持PostCSS，Autoprefixer和CSS模块）：\n  > SCSS/SASS\n    LESS\n    Stylus\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_5-是否使用路由的history模式："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-是否使用路由的history模式：","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. 是否使用路由的"),e("code",[this._v("history")]),this._v("模式：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("这里我建议选No，这样打包出来丢到服务器上可以直接使用了，后期要用的话，也可以自己再开起来。")])]),this._v(" "),e("li",[e("p",[this._v("选yes的话需要服务器那边再进行设置。")]),this._v(" "),e("pre",[e("code",[this._v("  Use history mode for router? (Requires proper server setup for index fallback in production) \n  // 路由使用history模式?(在生产环境中需要适当的服务器设置以备索引)\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_6-选择eslint代码验证规则："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-选择eslint代码验证规则：","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. 选择Eslint代码验证规则：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("> ESLint with error prevention only\n  ESLint + Airbnb config\n  ESLint + Standard config\n  ESLint + Prettier\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_7-选择什么时候进行代码规则检测："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-选择什么时候进行代码规则检测：","aria-hidden":"true"}},[this._v("#")]),this._v(" 7. 选择什么时候进行代码规则检测：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("建议选保存就检测，等到commit的时候，问题可能都已经积累很多了。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("  ? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)\n  >( ) Lint on save // 保存就检测\n   ( ) Lint and fix on commit // fix和commit时候检查\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_8-选择e2e测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-选择e2e测试","aria-hidden":"true"}},[this._v("#")]),this._v(" 8. 选择e2e测试:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("? Pick a E2E testing solution: (Use arrow keys)\n❯ Cypress (Chrome only) \n  Nightwatch (Selenium-based) \n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_9-把babel-postcss-eslint这些配置文件放哪："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-把babel-postcss-eslint这些配置文件放哪：","aria-hidden":"true"}},[this._v("#")]),this._v(" 9. 把babel,postcss,eslint这些配置文件放哪：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("通常我们会选择独立放置，让package.json干净些")]),this._v(" "),e("pre",[e("code",[this._v("  ? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys)\n  > In dedicated config files // 独立文件放置\n    In package.json // 放package.json里\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_10-是否保存配置："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-是否保存配置：","aria-hidden":"true"}},[this._v("#")]),this._v(" 10. 是否保存配置：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("Save this as a preset for future projects? (Y/n) // 是否记录一下以便下次继续使用这套配置\n// 选保存之后，会让你写一个配置的名字：\nSave preset as:  name // 然后你下次进入配置可以直接使用你这次的配置了\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_11-下载依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-下载依赖","aria-hidden":"true"}},[this._v("#")]),this._v(" 11. 下载依赖")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_12-webpack配置的目录不见了："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-webpack配置的目录不见了：","aria-hidden":"true"}},[this._v("#")]),this._v(" 12. webpack配置的目录不见了：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("这种方式的优势"),e("strong",[this._v("对小白来说非常友好")]),this._v("，不会一上来就两个文件夹，一堆文件，看着脑袋都大了。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("然后在"),e("strong",[this._v("引用"),e("s",[this._v("抄")]),this._v("别人的配置的时候，也非常方便")]),this._v("，直接将文件复制过来就好了。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[this._v("根目录新建一个"),e("code",[this._v("vue.config.js")]),this._v("文件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("  // vue.config.js\n  module.exports = {\n    // 选项...\n  }\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("还有一些小变动像：static文件夹改为public了，router文件夹变成了单个文件之类的(我之前一直这么做,嘿嘿)。")]),this._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/10/166fcd735ce563ba?w=214&h=520&f=png&s=33855",alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_13-启动项目："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-启动项目：","aria-hidden":"true"}},[this._v("#")]),this._v(" 13.启动项目：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("启动项目：npm run serve // "),e("strong",[this._v("不是之前的 npm run dev")])])]),this._v(" "),e("li",[e("p",[this._v("打开"),e("code",[this._v("http://localhost:8080")]),this._v("：")]),this._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/10/166fcd823cce157b?w=3352&h=1938&f=png&s=259698",alt:""}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"使用图形化界面创建-管理-运行项目："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用图形化界面创建-管理-运行项目：","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用图形化界面创建/管理/运行项目：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"启动图形化界面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动图形化界面","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动图形化界面")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("vue ui \n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("这是个全局的命令 在哪个文件夹都可以打开")])]),this._v(" "),e("li",[e("p",[this._v("界面(下图)，重要的项目可以收藏起来(置顶)：")]),this._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/10/166fd034aae0942d?w=1918&h=999&f=png&s=86025",alt:""}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"创建项目和导入项目："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建项目和导入项目：","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建项目和导入项目：")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[r("p",[t._v("目录选中之后，导入项目点击下面的导入就可以了。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/10/166fd0f5359fc7ba?w=980&h=389&f=png&s=147646",alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("创建项目，填一个文件夹名字：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/10/166fd177edf662d3?w=651&h=591&f=png&s=61598",alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("然后选一下预先保存好的设置就可以了，非常方便，建议采用图形界面来创建项目：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/10/166fd1a86f0e7bd5?w=1029&h=558&f=png&s=83704",alt:""}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"项目管理："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目管理：","aria-hidden":"true"}},[this._v("#")]),this._v(" 项目管理：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_1-仪表盘："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-仪表盘：","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 仪表盘：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("这个仪表盘，主要是为了我们操作方便而设置的")])]),this._v(" "),e("li",[e("p",[this._v("可以点击右上角的按钮，来添加/移动这些功能选项。")]),this._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/10/166fd276f5a4de8b?w=1918&h=999&f=png&s=214672",alt:""}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_2-vue-cli3-x插件："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue-cli3-x插件：","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. vue-cli3.x插件：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/10/166fd344e9e5edc0?w=1916&h=998&f=png&s=150720",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("cli3插件安装的过程：")]),this._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/10/166fd3595b37e06a?w=1535&h=972&f=png&s=223096",alt:"cli3插件安装的过程"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_3-项目依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-项目依赖","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 项目依赖")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("直接在图形界面管理依赖很舒服了！")])]),this._v(" "),e("li",[e("p",[this._v("安装依赖的时候，要记得选择开发依赖/运行依赖！")]),this._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/10/166fd391835d2edb?w=1915&h=996&f=png&s=287780",alt:""}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_4-项目配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-项目配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 项目配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("可以对cli进行一些配置、Eslint规则修改：")]),this._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/10/166fd3c81be26fd0?w=1911&h=990&f=png&s=248696",alt:""}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_5-任务："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-任务：","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. 任务：")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("p",[t._v("serve 运行项目，点击直接运行，再也不用输入命令了！")])]),t._v(" "),r("li",[r("p",[t._v("可以清楚的看到各个模块用了多久，方便我们"),r("strong",[t._v("针对性的进行优化")]),t._v("：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/10/166fd41bde538496?w=1913&h=996&f=png&s=223258",alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("build 打包项目：这里"),r("strong",[t._v("主要展示了图表的功能")]),t._v("，比以前2.x生成报告更加直观，超级棒！")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/10/166fd42dae770e0d?w=1731&h=906&f=png&s=121200",alt:""}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_6-其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-其他","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. 其他")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("夜间风格界面，我更喜欢这个界面")])]),this._v(" "),e("li",[e("p",[this._v("直接打开编辑器,很棒了！")])]),this._v(" "),e("li",[e("p",[this._v("还有一些乱七八糟的按钮")]),this._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/10/166fd4f37d2fd567?w=1913&h=994&f=png&s=145551",alt:""}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"结语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结语","aria-hidden":"true"}},[this._v("#")]),this._v(" 结语")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("可以说很认真了，希望大家看完能够有些收获，"),e("strong",[this._v("赶紧试试新版的vue-cli吧")]),this._v("！")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"希望看完的朋友可以点个喜欢-关注，您的支持是对我最大的鼓励。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#希望看完的朋友可以点个喜欢-关注，您的支持是对我最大的鼓励。","aria-hidden":"true"}},[this._v("#")]),this._v(" 希望看完的朋友可以点个喜欢/关注，您的支持是对我最大的鼓励。")])}],!1,null,null,null);i.options.__file="一份超级详细的Vue-cli3.0使用教程.md";e.default=i.exports}}]);