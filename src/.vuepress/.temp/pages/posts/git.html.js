export const data = JSON.parse("{\"key\":\"v-c5e5db88\",\"path\":\"/posts/git.html\",\"title\":\"git\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2022-01-09T00:00:00.000Z\",\"category\":[\"管理工具\"],\"tag\":[\"git\"]},\"headers\":[{\"level\":2,\"title\":\"git的概念\",\"slug\":\"git的概念\",\"link\":\"#git的概念\",\"children\":[]},{\"level\":2,\"title\":\"git配置\",\"slug\":\"git配置\",\"link\":\"#git配置\",\"children\":[]}],\"readingTime\":{\"minutes\":0.53,\"words\":158},\"localizedDate\":\"2022年1月9日\",\"filePathRelative\":\"posts/git.md\",\"excerpt\":\"<h1> git</h1>\\n<h2> git的概念</h2>\\n<p>Git 是一个版本控制系统，是任何软件开发项目中的主要内容。通常有两个主要用途：代码备份和代码版本控制。你可以逐步处理代码，在需要回滚到备份副本的过程中保存每一步的进度！</p>\\n<h2> git配置</h2>\\n<p>可以保存 Git 用户名和电子邮件，这样就不必在以后的 Git 命令中再次输入它们。<br>\\n在命令行中配置本地仓库的账号和邮箱：</p>\\n<div class=\\\"language-git line-numbers-mode\\\" data-ext=\\\"git\\\"><pre class=\\\"language-git\\\"><code><span class=\\\"token command\\\">$ git config<span class=\\\"token parameter\\\"> --global</span> user.name </span><span class=\\\"token string\\\">\\\"wupx\\\"</span>  \\n<span class=\\\"token command\\\">$ git config<span class=\\\"token parameter\\\"> --global</span> user.email </span><span class=\\\"token string\\\">\\\"wupx@qq.com\\\"</span>  \\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")

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
