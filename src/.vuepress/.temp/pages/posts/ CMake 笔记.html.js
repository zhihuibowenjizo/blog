export const data = JSON.parse("{\"key\":\"v-2b709b72\",\"path\":\"/posts/%20CMake%20%E7%AC%94%E8%AE%B0.html\",\"title\":\"CMake 笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2023-6-19\",\"category\":[\"c\"],\"tag\":[\"cmake\"]},\"headers\":[{\"level\":2,\"title\":\"CMake 概述\",\"slug\":\"cmake-概述\",\"link\":\"#cmake-概述\",\"children\":[{\"level\":3,\"title\":\"小科普\",\"slug\":\"小科普\",\"link\":\"#小科普\",\"children\":[]},{\"level\":3,\"title\":\"动态库与静态库\",\"slug\":\"动态库与静态库\",\"link\":\"#动态库与静态库\",\"children\":[]}]},{\"level\":2,\"title\":\"静态库\",\"slug\":\"静态库\",\"link\":\"#静态库\",\"children\":[{\"level\":3,\"title\":\"生成静态链接库\",\"slug\":\"生成静态链接库\",\"link\":\"#生成静态链接库\",\"children\":[]}]},{\"level\":2,\"title\":\"动态库\",\"slug\":\"动态库\",\"link\":\"#动态库\",\"children\":[{\"level\":3,\"title\":\"生成动态链接库\",\"slug\":\"生成动态链接库\",\"link\":\"#生成动态链接库\",\"children\":[]}]}],\"readingTime\":{\"minutes\":4,\"words\":1201},\"localizedDate\":\"2023年6月19日\",\"filePathRelative\":\"posts/# CMake 笔记.md\",\"excerpt\":\"<h1> CMake 笔记</h1>\\n<h2> CMake 概述</h2>\\n<p>CMake 是一个项目构建工具，并且是跨平台的。\\n源文件（.c .cpp） 想要变成可执行程序需要编译器处理\\n所谓编译器其实是一套工具链\\n第一部分 预处理器 (替换宏、去注释)\\n第二部分 编译 （通过gcc 等 生成 汇编文件）\\n第三部分 汇编  （通过汇编器处理完的就是二进制文件了，win 为  .obj 在 Linux 为 .o）\\n第四部分 链接  （把所有二进制文件进行链接，链接成一个二进制可执行文件）\\n如果项目文件比较多，进行打包操作时命令会非常长 ，不方便，</p>\\n<p>于是就可以写一个makefile脚本文件,在里面写一些指令来告诉编译器如何编译这些源文件，写好文件后要实行一个批处理命令 make ,然后程序就会根据makefile 里的要求把东西编译出来了</p>\"}")

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
