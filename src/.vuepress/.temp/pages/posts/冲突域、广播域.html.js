export const data = JSON.parse("{\"key\":\"v-4369587f\",\"path\":\"/posts/%E5%86%B2%E7%AA%81%E5%9F%9F%E3%80%81%E5%B9%BF%E6%92%AD%E5%9F%9F.html\",\"title\":\"冲突域和广播域\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2022-12-19T00:00:00.000Z\",\"category\":[\"网络\"],\"tag\":[\"冲突域\",\"广播域\"]},\"headers\":[{\"level\":2,\"title\":\"冲突域\",\"slug\":\"冲突域\",\"link\":\"#冲突域\",\"children\":[]},{\"level\":2,\"title\":\"广播域\",\"slug\":\"广播域\",\"link\":\"#广播域\",\"children\":[]}],\"readingTime\":{\"minutes\":1.08,\"words\":323},\"localizedDate\":\"2022年12月19日\",\"filePathRelative\":\"posts/冲突域、广播域.md\",\"excerpt\":\"<h1> 冲突域和广播域</h1>\\n<h2> 冲突域</h2>\\n<p>这个域代表了冲突在其中发生并传播的区域。在OSI模型中，冲突域被看作是第一层的概念。<br>\\n用HUB(集线器)连接在一起的设备就在一个冲突域中，因为HUB是个半双工设备，同一时间只能有一台设备发送广播，如果有两台设备在这个域中同一时刻发送广播，那么就会发生冲突，所以叫冲突域。<br>\\n而<strong>网桥、交换机(二层设备)，路由器(三层设备)，可以划分冲突域，也可以连接冲突域</strong></p>\\n<h2> 广播域</h2>\\n<p>接受同样广播消息的节点的集合。<br>\\n网络中的广播就好像我们商场里的广播一样，你一开口，全商场的人都听到了。所能广播到的范围就是广播域。如果不维护广播域，就会消耗大量的带宽，降低网络的效率。<br>\\n路由器可以分割广播域</p>\"}")

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
