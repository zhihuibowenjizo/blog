---
icon: edit
date: 2022-12-13
star: false
category:
  - Linux
tag:
  - 指令
---
# 进程管理指令
## ps [OPTION]
* 选项
  * a 显示与终端有关的进程
  * x 显示与终端无关联的进程
  * u 显示进程更详细的信息
  * f 用树状结构显示进程的关系
  * o 显示特定的内容(pid,tty...)
  * k 对属性排序，在要排序的属性前加-,表示倒序
  * L 表示ps支持的所有属性
  
## uptime
显示当前时间，系统已启动的时间、当前上线人数，系统平均负载(1、5、10分钟的平均负载，一般不会超过1)
* 系统平均负载：
  指在特定时间间隔内运行队列中的平均进程数
* 通常每个内核当前活动进程数不大于3为良好。(假如是双核cpu，那系统平均负载要低于6)

# top
更全的、实时的进程信息
包含了 uptime指令的内容
包含 进程状态
包含 cpu 时间分配
包含 内存使用的信息
