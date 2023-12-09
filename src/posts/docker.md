---
icon: edit
date: 2023-08-03
category:
  - 网络
tag:
  - 冲突域
  - 广播域
---

# docker

## docker 参数解释
-i 交互式命令操作
-t 开启预估终端

-d 后台运行

--rm 容器挂掉后自动被删除

--name 给容器起名字

指定端口映射 -p  宿主机端口:容器端口 

随机端口映射  -P    随机使用宿主机没有使用的端口映射容器使用的端口

## docker 切换不同的发行版
使用docker ，可以切换不同的发行版，但是linux内核 使用的 都是宿主机内核


## docker 镜像定义
docker 镜像不包含linux内核，和宿主机公用
docker 镜像想运行，最基础的需要一个发行版平台，再来安装我们想要的依赖环境!



## docker容器管理

docker run 等于创建 + 启动

docker run 镜像名，如果镜像不存在本地，则会去下载该镜像

注意： 容器内的进程必须处于前台运行状态，否则容器会直接退出

如果容器内什么事情也没做，容器也会挂掉



### 查看容器日志

docker logs （-f） 容器id



### 进入正在运行的容器空间内

docker exec -it 容器id bash



### 查看容器详细信息，用于高级调试

docker container inspect  容器id



### 提交容器

docker commit 容器id 新的镜像名





# dockerfile

dockerfile 文件名必须是dockerfile

使用dockerfile 构建 docker 镜像： docker build .

修改镜像名称 ： docker tag 镜像id 要改的名字

### dockerfile 主要组成部分

基础镜像信息 FROM centos:6.8

制作镜像操作指令 RUN yum install openssh-server -y

容器启动时执行指令 CMD ["/bin/bash"]

## dockerfile 基础指令

FROM  指定基础镜像

MAINTAINER 指定维护者信息

RUN 在命令前面加上RUN

ADD 添加宿主机的文件到容器内，自动解压

COPY 作用和ADD 是一样的，但是仅拷贝，不会解压

WORKDIR 设置当前工作目录

VOLUME 设置卷，挂载主机目录

EXPOSE 指定对外端口

CMD  指定容器启动后要干的事情
