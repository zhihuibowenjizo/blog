export const data = JSON.parse("{\"key\":\"v-1473bf53\",\"path\":\"/demo/\",\"title\":\"主要功能与配置演示\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"主要功能与配置演示\",\"index\":false,\"icon\":\"discover\",\"category\":[\"使用指南\"]},\"headers\":[{\"level\":2,\"title\":\"目录\",\"slug\":\"目录\",\"link\":\"#目录\",\"children\":[]}],\"readingTime\":{\"minutes\":0.13,\"words\":40},\"filePathRelative\":\"demo/README.md\",\"excerpt\":\"<h2> 目录</h2>\\n<ul>\\n<li>\\n<p><a href=\\\"/demo/markdown.html\\\" target=\\\"blank\\\">Markdown 展示</a></p>\\n</li>\\n<li>\\n<p><a href=\\\"/demo/page.html\\\" target=\\\"blank\\\">页面展示</a></p>\\n</li>\\n<li>\\n<p><a href=\\\"/demo/disable.html\\\" target=\\\"blank\\\">禁用展示</a></p>\\n</li>\\n<li>\\n<p><a href=\\\"/demo/encrypt.html\\\" target=\\\"blank\\\">加密展示</a></p>\\n</li>\\n</ul>\"}")

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
