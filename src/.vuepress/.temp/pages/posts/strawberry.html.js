export const data = JSON.parse("{\"key\":\"v-f0ec4556\",\"path\":\"/posts/strawberry.html\",\"title\":\"草莓\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2022-01-11T00:00:00.000Z\",\"category\":[\"水果\",\"草莓\"],\"tag\":[\"红\",\"小\"]},\"headers\":[{\"level\":2,\"title\":\"标题 2\",\"slug\":\"标题-2\",\"link\":\"#标题-2\",\"children\":[{\"level\":3,\"title\":\"标题 3\",\"slug\":\"标题-3\",\"link\":\"#标题-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.11,\"words\":32},\"localizedDate\":\"2022年1月11日\",\"filePathRelative\":\"posts/strawberry.md\",\"excerpt\":\"<h1> 草莓</h1>\\n<h2> 标题 2</h2>\\n<p>这里是内容。</p>\\n<h3> 标题 3</h3>\\n<p>这里是内容。</p>\\n\"}")

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
