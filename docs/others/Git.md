# Git

1. 配置用户签名（首次需要设置，否则提交时报错）
2. 初始化本地库

## 命令

1. 初始化本地库(会在当前目录生成`.git`的文件夹)

    ```shell
    git init 
    ```

2. 连接远程仓库

    ```shell
    git remote add origin xxxxx//x为remoteRepo的SSH或者https
    git clone xxxxx//克隆会直接连接
    git remote -v//查看远程仓库地址
    ```
3. 查看状态

    ```shell
    git status
    ```

4. 将文件加入追踪/删除追踪

    ```shell
    git add filename //单个文件
    git add . //所有文件
    git rm --cached filename //去除对文件的追踪
    ```

5. 提交本地库

    ``` shell
    git commit -m "desription of this version." //""中是对这次提交的版本的描述
    //git会输出 [main xxxxxxx] //xx为版本号前七位
    ```

6. 查看版本信息

    ```shell
    git reflog //版本号为前七位 
    git log  //详细信息
    ```

7. 版本设置（会修改本地文件）

    ``` shell
    git reset --hard xxxxxxx //--hard 强制回退到xxxxxx版本
    ```



## 分支

> 可以并行开发多个功能，提高开发效率。
>
> 开发失败不会互相影响

1. 查看分支

   ```shell
   git branch -v 
   ```

2. 创建分支

   ```shell
   git branch name
   ```

3. 切换分支

   ```shell
   git checkout name
   ```

4. 合并分支

      ```shell	
      git merge name //将name分支合并到当前分支
      ```

5. 删除分支

    ```shell
    git branch -D localBranchName
    ```



### 分支冲突
> 原因：被合并的分支与当前分支在同一文件的同一位置有不同修改)

__解决步骤__
```shell
手动操作文件，解决冲突。
git add conflictFile //将冲突文件加入追踪
git commit -m "version description" //最后不加文件名，直接默认commit到当前分支。
```

被合并的分支中冲突文件保持原状态。

## 协作

### 团队协作

1. 初始化项目库

2. 将自己的分支交到代码托管平台如`github`

   ```shell
   git push
   ```

3. 将远程库克隆\拉取到本地

   ```shell
   git clone //
   git pull
   ```

### 友情协作

1. 协助者`fork`项目到自己远程库。
2. 协助者将远程库`clone`到本地
3. 协助者进行本地修改后，`commit`本地分支，再`push`到自己远程库，提交`pull request`请求。经团队管理员审核后`merge`成功。

## 远程和本地交互

1. 本地远程连接

    ```shell
    git remote add origin xxxxx//x为remoteRepo的SSH或者https
    git clone xxxxx//克隆会直接连接
    git remote -v//查看远程仓库地址
    ```

2. 给`remote repo`创建别名 、查看别名

    ``` shell
    git remote add alaisName xxxx //xxx为项目地址
    git remote -v //查看别名
    ```

3. 将本地当前分支`push`到`remote repo`

    ```shell
    git push origin/address remoteBranch //origin是当前git对应github的项目
    ```

4. 将远程分支`pull`到当前分支

    ```shell
    git pull origin/address remoteBranch // origin是当前git对应github的项目
    ```



## GIT插件集成到软件

