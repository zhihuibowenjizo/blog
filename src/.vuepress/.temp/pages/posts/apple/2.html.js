export const data = JSON.parse("{\"key\":\"v-696d9fb1\",\"path\":\"/posts/apple/2.html\",\"title\":\"苹果 2\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2022-01-02T00:00:00.000Z\",\"category\":[\"苹果\"],\"tag\":[\"红\",\"大\",\"圆\"],\"star\":true,\"article\":false},\"headers\":[{\"level\":2,\"title\":\"标题 2\",\"slug\":\"标题-2\",\"link\":\"#标题-2\",\"children\":[{\"level\":3,\"title\":\"标题 3\",\"slug\":\"标题-3\",\"link\":\"#标题-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.16,\"words\":48},\"localizedDate\":\"2022年1月2日\",\"filePathRelative\":\"posts/apple/2.md\",\"excerpt\":\"<h1> 苹果 2</h1>\\n<p>一个被星标了的苹果文章。</p>\\n\"}")

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
