export const data = JSON.parse("{\"key\":\"v-6cd750ef\",\"path\":\"/posts/apple/4.html\",\"title\":\"苹果 4\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2022-01-04T00:00:00.000Z\",\"category\":[\"苹果\",\"水果\"],\"tag\":[\"红\",\"大\",\"圆\"]},\"headers\":[{\"level\":2,\"title\":\"标题 2\",\"slug\":\"标题-2\",\"link\":\"#标题-2\",\"children\":[{\"level\":3,\"title\":\"标题 3\",\"slug\":\"标题-3\",\"link\":\"#标题-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.11,\"words\":34},\"localizedDate\":\"2022年1月4日\",\"filePathRelative\":\"posts/apple/4.md\",\"excerpt\":\"<h1> 苹果 4</h1>\\n<h2> 标题 2</h2>\\n<p>这里是内容。</p>\\n<h3> 标题 3</h3>\\n<p>这里是内容。</p>\\n\"}")

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
