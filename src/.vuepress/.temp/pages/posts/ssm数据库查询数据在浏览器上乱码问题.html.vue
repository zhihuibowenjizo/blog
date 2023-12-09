<template><div><h1 id="ssm-数据库查询数据-在-浏览器上乱码问题" tabindex="-1"><a class="header-anchor" href="#ssm-数据库查询数据-在-浏览器上乱码问题" aria-hidden="true">#</a> ssm 数据库查询数据 在 浏览器上乱码问题</h1>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/"</span><span class="token punctuation">,</span> produces <span class="token operator">=</span> <span class="token string">"application/json; charset=utf-8"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>加上produces即可</p>
<h1 id="spring集成mybatis-plus-报错" tabindex="-1"><a class="header-anchor" href="#spring集成mybatis-plus-报错" aria-hidden="true">#</a> spring集成mybatis-plus 报错</h1>
<p>引入Mybatis-Plus之后请不要再次引入MyBatis以及MyBatis-Spring，
不然有可能因版本差异而导致报错。</p>
<h1 id="mysql-表格id-自增起始值设置" tabindex="-1"><a class="header-anchor" href="#mysql-表格id-自增起始值设置" aria-hidden="true">#</a> mysql 表格id 自增起始值设置</h1>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>ALTER TABLE TABLE_NAME AUTO_INCREMENT = 0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


