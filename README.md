# 基于GitHub和VuePress的个人博客网站

>  基于VuePress [官方文档](https://vuepress.vuejs.org/zh/)
>
>  本网站参考🎉 [视频地址](https://www.bilibili.com/video/av43316513/) 🎉搭建完成，对视频作者表示感谢。
>
>  以下内容仅供复习使用，如需复刻本项目，请移步上述视频学习。

## 依赖

### 硬件环境依赖

1. `Node.js` 

### 前置知识依赖

1. `Git`

## 项目目录结构

> 参考：[目录结构 | VuePress (vuejs.org)](https://vuepress.vuejs.org/zh/guide/directory-structure.html)
>
> `./`表示在`docs`目录

### 配置文件

`package.json`存放仓库链接信息，脚本运行信息

`./docs/.vuepress/config.js`存储网站全局主题信息、插件信息等

### 图片文件

`./.vuepress/public/assets/img/`存放

## 搭建

### 初始化

1. 在`github`上`clone`一个仓库到本地，`git bash`打开

    ```shell
    npm init //用于在当前目录下生成package.json文件
    ```

2. 在`package`文件中加入官方给的脚本

   ```javascript
   "scripts": {
       "docs:dev": "vuepress dev docs",
       "docs:build": "vuepress build docs"
       }
   ```

3. 创建`./docs`文件夹, 并在该文件夹中添加`README.md`文件作为网站首页。

4. 在本地启动服务器

   ```shell
   yarn docs:dev //其实对应package文件中的vuepress dev docs脚本
   ```

## 部署

```shell
yarn docs:nav -f //使用插件更新导航栏
yarn deploy //部署到github相关repo的gh-pages分支
git push origin main //更新源文件至main分支
```





