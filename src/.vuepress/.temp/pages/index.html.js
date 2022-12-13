export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"博客主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"home\",\"title\":\"博客主页\",\"heroImage\":\"/logo.png\",\"heroText\":\"只会博文疾走的博客\",\"heroFullScreen\":true,\"tagline\":\"这只是测试\",\"projects\":[{\"icon\":\"project\",\"name\":\"alist\",\"desc\":\"私人网盘,alist驱动\",\"link\":\"http://pan.zghtools.run:5244\"}],\"footer\":\"自定义你的页脚文字\"},\"headers\":[],\"readingTime\":{\"minutes\":0.74,\"words\":222},\"filePathRelative\":\"README.md\",\"excerpt\":\"<!-- 这是一个博客主页的案例。\\n\\n要使用此布局，你应该在页面前端设置 `layout: Blog` 和 `home: true`。\\n\\n相关配置文档请见 [博客主页](https://vuepress-theme-hope.github.io/v2/zh/guide/blog/home/)。 -->\\n\"}")

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
