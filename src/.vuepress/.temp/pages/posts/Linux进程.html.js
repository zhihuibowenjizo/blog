export const data = JSON.parse("{\"key\":\"v-a1f8e2e6\",\"path\":\"/posts/Linux%E8%BF%9B%E7%A8%8B.html\",\"title\":\"Linux 进程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2022-12-12T00:00:00.000Z\",\"star\":false,\"category\":[\"Linux\"],\"tag\":[\"进程\"]},\"headers\":[{\"level\":2,\"title\":\"systemd(init)进程\",\"slug\":\"systemd-init-进程\",\"link\":\"#systemd-init-进程\",\"children\":[]},{\"level\":2,\"title\":\"进程分类\",\"slug\":\"进程分类\",\"link\":\"#进程分类\",\"children\":[]},{\"level\":2,\"title\":\"守护进程(daemon)\",\"slug\":\"守护进程-daemon\",\"link\":\"#守护进程-daemon\",\"children\":[]},{\"level\":2,\"title\":\"查找进程id\",\"slug\":\"查找进程id\",\"link\":\"#查找进程id\",\"children\":[]},{\"level\":2,\"title\":\"在linux中启动一个进程\",\"slug\":\"在linux中启动一个进程\",\"link\":\"#在linux中启动一个进程\",\"children\":[]},{\"level\":2,\"title\":\"后台启动的一些指令\",\"slug\":\"后台启动的一些指令\",\"link\":\"#后台启动的一些指令\",\"children\":[]},{\"level\":2,\"title\":\"进程的状态\",\"slug\":\"进程的状态\",\"link\":\"#进程的状态\",\"children\":[]}],\"readingTime\":{\"minutes\":3.79,\"words\":1137},\"localizedDate\":\"2022年12月12日\",\"filePathRelative\":\"posts/Linux进程.md\",\"excerpt\":\"<h1> Linux 进程</h1>\\n<ul>\\n<li>进程(process)是指正在执行的程序；是程序正在运行的一个实例。它由程序指令，和从文件、其它程序中读取的数据或系统用户的输入组成。</li>\\n<li>每个用户都可以运行多个程序，为了区分每一个程序，Linux给每个进程都做了标识，称为进程号(process ID)，每个进程号是唯一的。<em>在/proc目录，存储有当前内核运行状态的一些特殊文件，其中就有进程号信息。</em></li>\\n<li>进程可以被分为\\n<ul>\\n<li>父进程(PID) 这些是在运行时创建其它进程的进程。</li>\\n<li>子进程(PPID) 这些是在运行时由其它进程创建的进程。</li>\\n</ul>\\n</li>\\n</ul>\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
