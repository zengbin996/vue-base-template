# Vue 项目模板

使用技术

> vue tailwindcss vue-router vue-i18n pinia element-plus axios dayjs

## 项目启动

推荐使用nodejs版本：`v20.11.1`

推荐使用`yarn`启动项目

安装依赖：`yarn`

启动项目：`yarn dev`

## 自动导入

项目使用了 `AutoImport` 和 `Components`自动导入组件和方法。可以在组件直接使用`vue`/`vue-router`等模块导出的方法，如`useRef`/`uesRouter`。对于`src/components`目录下的组件，可以直接在其他文件中使用，不用导入，名称一样即可。注意不要和系统标签和组件库的组件名字一样，建议使用两个以上单词用`-`连接。详情配置请查看`vite.config.ts`文件内容。

## 翻译

项目使用`vue-i18n`作为多语言翻译插件。建议搭配 vscode 扩展`i18n Ally`联合使用。具体使用方法请参考[https://github.com/lokalise/i18n-ally](https://github.com/lokalise/i18n-ally)

## 关于CSS

项目使用`tailwindcss`作为css框架，不建议直接书写css，效率较低。tailwindcss将常用的样式封装好了类名，只写书写class即可。具体使用方法请参考[https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)。

## 静态资源文件

若文件较大，将文件放在`/public`目录下，使用绝对路经直接引入即可。如`/assets/banner.png`，注意不需要`/public`，否则在开发阶段能看到图片，build之后就无法看到图片；若文件比较小放在`src/assets`目录下，使用相对路经引入。动态引入需要使用vite提供的方法`new URL`，详情参考[https://cn.vitejs.dev/guide/assets](https://cn.vitejs.dev/guide/assets)。

## 关于其他建议

1. 建议使用vscode开发，安装一下插件：`Prettier - Code formatter`,`Tailwind CSS IntelliSense`,`Vue Language Features (Volar)`,`TypeScript Vue Plugin (Volar)`,`Vue VSCode Snippets`,`i18n Ally`,`Path Intellisense`。

2. 书写建议参考[https://blog.csdn.net/weixin_42541725/article/details/124599312](https://blog.csdn.net/weixin_42541725/article/details/124599312)
