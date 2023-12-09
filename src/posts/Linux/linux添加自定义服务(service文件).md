---
icon: edit
date: 2022-02-19
star: false
category:
  - Linux
tag:
  - 技巧
---

# Linux添加自定义服务
## Linux系统中也有“服务”这一说法，通过服务我们可以便捷地管理一些程序功能，也可以作为程序开机自启的一个手段之一

### 每一个服务在Linux有它自己的对应的配置文件，这个文件可以通过文本编辑器编辑，扩展名为xxx.servive（xxx为服务名称）。这些文件位于/usr/lib/systemd/system目录下。

```
[Unit]
Description=服务描述
After=服务依赖（再这些服务后启动本服务）
 
[Service]
Type=服务类型
ExecStart=启动命令
ExecStop=终止命令
ExecReload=重启命令
 
[Install]
WantedBy=服务安装设置
```