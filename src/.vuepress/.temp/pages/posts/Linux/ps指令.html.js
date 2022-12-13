export const data = JSON.parse("{\"key\":\"v-35d94e09\",\"path\":\"/posts/Linux/ps%E6%8C%87%E4%BB%A4.html\",\"title\":\"进程管理指令\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2022-12-13T00:00:00.000Z\",\"star\":false,\"category\":[\"Linux\"],\"tag\":[\"指令\"]},\"headers\":[{\"level\":2,\"title\":\"ps [OPTION]\",\"slug\":\"ps-option\",\"link\":\"#ps-option\",\"children\":[]},{\"level\":2,\"title\":\"uptime\",\"slug\":\"uptime\",\"link\":\"#uptime\",\"children\":[]}],\"readingTime\":{\"minutes\":0.86,\"words\":259},\"localizedDate\":\"2022年12月13日\",\"filePathRelative\":\"posts/Linux/ps指令.md\",\"excerpt\":\"<h1> 进程管理指令</h1>\\n<h2> ps [OPTION]</h2>\\n<ul>\\n<li>选项\\n<ul>\\n<li>a 显示与终端有关的进程</li>\\n<li>x 显示与终端无关联的进程</li>\\n<li>u 显示进程更详细的信息</li>\\n<li>f 用树状结构显示进程的关系</li>\\n<li>o 显示特定的内容(pid,tty...)</li>\\n<li>k 对属性排序，在要排序的属性前加-,表示倒序</li>\\n<li>L 表示ps支持的所有属性</li>\\n</ul>\\n</li>\\n</ul>\\n<h2> uptime</h2>\\n<p>显示当前时间，系统已启动的时间、当前上线人数，系统平均负载(1、5、10分钟的平均负载，一般不会超过1)</p>\"}")

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
