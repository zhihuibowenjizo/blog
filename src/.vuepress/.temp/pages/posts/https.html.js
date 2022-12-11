export const data = JSON.parse("{\"key\":\"v-d8e090fa\",\"path\":\"/posts/https.html\",\"title\":\"HTTPS加密原理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2022-01-09T00:00:00.000Z\",\"category\":[\"网络\"],\"tag\":[\"https\",\"协议\"]},\"headers\":[{\"level\":2,\"title\":\"为什么要加密\",\"slug\":\"为什么要加密\",\"link\":\"#为什么要加密\",\"children\":[]},{\"level\":2,\"title\":\"对称加密\",\"slug\":\"对称加密\",\"link\":\"#对称加密\",\"children\":[]},{\"level\":2,\"title\":\"非对称加密\",\"slug\":\"非对称加密\",\"link\":\"#非对称加密\",\"children\":[]},{\"level\":2,\"title\":\"非对称加密 + 对称加密\",\"slug\":\"非对称加密-对称加密\",\"link\":\"#非对称加密-对称加密\",\"children\":[]},{\"level\":2,\"title\":\"如何证明客户端收到的公钥是想要请求的服务器传过来的？\",\"slug\":\"如何证明客户端收到的公钥是想要请求的服务器传过来的\",\"link\":\"#如何证明客户端收到的公钥是想要请求的服务器传过来的\",\"children\":[]},{\"level\":2,\"title\":\"数字证书\",\"slug\":\"数字证书\",\"link\":\"#数字证书\",\"children\":[]},{\"level\":2,\"title\":\"数字签名\",\"slug\":\"数字签名\",\"link\":\"#数字签名\",\"children\":[]},{\"level\":2,\"title\":\"中间人可能会篡改、掉包证书吗？\",\"slug\":\"中间人可能会篡改、掉包证书吗\",\"link\":\"#中间人可能会篡改、掉包证书吗\",\"children\":[]},{\"level\":2,\"title\":\"怎么证明CA机构的公钥是可信的？？\",\"slug\":\"怎么证明ca机构的公钥是可信的\",\"link\":\"#怎么证明ca机构的公钥是可信的\",\"children\":[]}],\"readingTime\":{\"minutes\":6.09,\"words\":1827},\"localizedDate\":\"2022年1月9日\",\"filePathRelative\":\"posts/https.md\",\"excerpt\":\"<h1> HTTPS加密原理</h1>\\n<h2> 为什么要加密</h2>\\n<blockquote>\\n<p>因为http的内容是明文传输的，明文数据会经过中间代理服务器、路由器、wifi热点、通信服务运营商等多个物理节点，如果信息在传输过程中被劫持，传输的内容就完全暴露了。劫持者还可以篡改传输的信息且不被双方察觉，这就是中间人攻击。所以我们才需要对信息进行加密。</p>\\n</blockquote>\\n<h2> 对称加密</h2>\\n<blockquote>\\n<p>简单说就是有一个密钥，它可以加密一段信息，也可以对加密后的信息进行解密，和我们日常生活中用的钥匙作用差不多。在服务器与客户端通信前，服务端会把密钥传给客户端，之后双方用密钥加密通信</p>\\n</blockquote>\"}")

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
