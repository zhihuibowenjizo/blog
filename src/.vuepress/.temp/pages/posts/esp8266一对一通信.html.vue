<template><div><h1 id="esp8266-一对一通信" tabindex="-1"><a class="header-anchor" href="#esp8266-一对一通信" aria-hidden="true">#</a> esp8266 一对一通信</h1>
<p>一、将模块一配置为AP模式作为服务器
通过串口助手依次发送指令如下:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>AT+CWMODE=2 
AT+RST
AT+CWSAP="ssid","pw",6,4
AT+CIPMUX=1
AT+CIPSERVER=1,333
AT+CIFSR
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二、将模块二配置为STA模式作为客户端</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>AT+CWMODE=1
AT+RST
AT+CIPMUX=0
AT+CWJAP="ssid","pwd"
AT+CIPSTART="TCP","ip",333
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务器给客户端发送" tabindex="-1"><a class="header-anchor" href="#服务器给客户端发送" aria-hidden="true">#</a> 服务器给客户端发送</h3>
<p>AT+CIPSEND=网络id,字段长度</p>
<h3 id="客户端发服务端" tabindex="-1"><a class="header-anchor" href="#客户端发服务端" aria-hidden="true">#</a> 客户端发服务端</h3>
<p>AT+CIPSEND=字段长度</p>
<h2 id="_8266-透传" tabindex="-1"><a class="header-anchor" href="#_8266-透传" aria-hidden="true">#</a> 8266 透传</h2>
<p>AT+SAVETRANSLINK=1,“192.168.6.110”,1002,&quot;TCP 通过类似指令将TCP连接的信息写入到esp8266的Flash中去，并开启开机透传模式，及一开机就进入透传模式，此时的AT指令无效，要想重新使得AT指令有效，只需要发送“+++”三个加号就可以了，注意发送”+++“不能加换行符！！！不能加换行符！！！</p>
<p>服务端每次重启 需要从新打开tcp服务器
AT+CIPMUX=1
AT+CIPSERVER=1,333</p>
</div></template>


