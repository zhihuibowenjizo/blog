import{_ as e,V as i,W as n,a0 as s}from"./framework-c2e81092.js";const a={},d=s(`<h1 id="linux添加自定义服务" tabindex="-1"><a class="header-anchor" href="#linux添加自定义服务" aria-hidden="true">#</a> Linux添加自定义服务</h1><h2 id="linux系统中也有-服务-这一说法-通过服务我们可以便捷地管理一些程序功能-也可以作为程序开机自启的一个手段之一" tabindex="-1"><a class="header-anchor" href="#linux系统中也有-服务-这一说法-通过服务我们可以便捷地管理一些程序功能-也可以作为程序开机自启的一个手段之一" aria-hidden="true">#</a> Linux系统中也有“服务”这一说法，通过服务我们可以便捷地管理一些程序功能，也可以作为程序开机自启的一个手段之一</h2><h3 id="每一个服务在linux有它自己的对应的配置文件-这个文件可以通过文本编辑器编辑-扩展名为xxx-servive-xxx为服务名称-。这些文件位于-usr-lib-systemd-system目录下。" tabindex="-1"><a class="header-anchor" href="#每一个服务在linux有它自己的对应的配置文件-这个文件可以通过文本编辑器编辑-扩展名为xxx-servive-xxx为服务名称-。这些文件位于-usr-lib-systemd-system目录下。" aria-hidden="true">#</a> 每一个服务在Linux有它自己的对应的配置文件，这个文件可以通过文本编辑器编辑，扩展名为xxx.servive（xxx为服务名称）。这些文件位于/usr/lib/systemd/system目录下。</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Unit]
Description=服务描述
After=服务依赖（再这些服务后启动本服务）
 
[Service]
Type=服务类型
ExecStart=启动命令
ExecStop=终止命令
ExecReload=重启命令
 
[Install]
WantedBy=服务安装设置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[d];function r(t,c){return i(),n("div",null,l)}const u=e(a,[["render",r],["__file","linux添加自定义服务(service文件).html.vue"]]);export{u as default};
