export const data = JSON.parse("{\"key\":\"v-4d144f52\",\"path\":\"/posts/%20esp8266%20%E4%B8%80%E5%AF%B9%E4%B8%80%E9%80%9A%E4%BF%A1.html\",\"title\":\"esp8266 一对一通信\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2023-04-09T00:00:00.000Z\",\"category\":[\"esp8266\"]},\"headers\":[{\"level\":3,\"title\":\"服务器给客户端发送\",\"slug\":\"服务器给客户端发送\",\"link\":\"#服务器给客户端发送\",\"children\":[]},{\"level\":3,\"title\":\"客户端发服务端\",\"slug\":\"客户端发服务端\",\"link\":\"#客户端发服务端\",\"children\":[]},{\"level\":2,\"title\":\"8266 透传\",\"slug\":\"_8266-透传\",\"link\":\"#_8266-透传\",\"children\":[]}],\"readingTime\":{\"minutes\":0.83,\"words\":250},\"localizedDate\":\"2023年4月9日\",\"filePathRelative\":\"posts/# esp8266 一对一通信.md\",\"excerpt\":\"<h1> esp8266 一对一通信</h1>\\n<p>一、将模块一配置为AP模式作为服务器\\n通过串口助手依次发送指令如下:\\nAT+CWMODE=2\\nAT+RST\\nAT+CWSAP=\\\"ssid\\\",\\\"pw\\\",6,4\\nAT+CIPMUX=1\\nAT+CIPSERVER=1,333\\nAT+CIFSR</p>\\n<p>二、将模块二配置为STA模式作为客户端\\nAT+CWMODE=1\\nAT+RST\\nAT+CIPMUX=0\\nAT+CWJAP=\\\"ssid\\\",\\\"pwd\\\"\\nAT+CIPSTART=\\\"TCP\\\",\\\"ip\\\",333</p>\\n<h3> 服务器给客户端发送</h3>\\n<p>AT+CIPSEND=网络id,字段长度</p>\"}")

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
