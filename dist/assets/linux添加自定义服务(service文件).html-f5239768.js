const e=JSON.parse('{"key":"v-a6ac369e","path":"/posts/Linux/linux%E6%B7%BB%E5%8A%A0%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9C%8D%E5%8A%A1(service%E6%96%87%E4%BB%B6).html","title":"Linux添加自定义服务","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-02-19T00:00:00.000Z","star":false,"category":["Linux"],"tag":["技巧"]},"headers":[{"level":2,"title":"Linux系统中也有“服务”这一说法，通过服务我们可以便捷地管理一些程序功能，也可以作为程序开机自启的一个手段之一","slug":"linux系统中也有-服务-这一说法-通过服务我们可以便捷地管理一些程序功能-也可以作为程序开机自启的一个手段之一","link":"#linux系统中也有-服务-这一说法-通过服务我们可以便捷地管理一些程序功能-也可以作为程序开机自启的一个手段之一","children":[{"level":3,"title":"每一个服务在Linux有它自己的对应的配置文件，这个文件可以通过文本编辑器编辑，扩展名为xxx.servive（xxx为服务名称）。这些文件位于/usr/lib/systemd/system目录下。","slug":"每一个服务在linux有它自己的对应的配置文件-这个文件可以通过文本编辑器编辑-扩展名为xxx-servive-xxx为服务名称-。这些文件位于-usr-lib-systemd-system目录下。","link":"#每一个服务在linux有它自己的对应的配置文件-这个文件可以通过文本编辑器编辑-扩展名为xxx-servive-xxx为服务名称-。这些文件位于-usr-lib-systemd-system目录下。","children":[]}]}],"git":{"createdTime":1702122741000,"updatedTime":1702122741000,"contributors":[{"name":"Zhao Guo Hao","email":"1121234199@qq.com","commits":1}]},"readingTime":{"minutes":0.6,"words":179},"localizedDate":"2022年2月19日","filePathRelative":"posts/Linux/linux添加自定义服务(service文件).md","excerpt":"<h1> Linux添加自定义服务</h1>\\n<h2> Linux系统中也有“服务”这一说法，通过服务我们可以便捷地管理一些程序功能，也可以作为程序开机自启的一个手段之一</h2>\\n<h3> 每一个服务在Linux有它自己的对应的配置文件，这个文件可以通过文本编辑器编辑，扩展名为xxx.servive（xxx为服务名称）。这些文件位于/usr/lib/systemd/system目录下。</h3>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>[Unit]\\nDescription=服务描述\\nAfter=服务依赖（再这些服务后启动本服务）\\n \\n[Service]\\nType=服务类型\\nExecStart=启动命令\\nExecStop=终止命令\\nExecReload=重启命令\\n \\n[Install]\\nWantedBy=服务安装设置\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
