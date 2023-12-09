<template><div><h1 id="c-命名空间" tabindex="-1"><a class="header-anchor" href="#c-命名空间" aria-hidden="true">#</a> C++ 命名空间</h1>
<p>C++中的命名空间是一种将变量、函数和类等符号封装起来的机制，用来避免同一个程序中不同部分的代码名称冲突。它可以被看作是一种组织代码的方式，可以将相关的代码放在同一个命名空间下，方便管理和使用。</p>
<p>一个命名空间是由关键字 <code v-pre>namespace</code> 后跟命名空间名称和花括号扩起来的一系列声明组成的。例如：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">namespace</span> MyNamespace <span class="token punctuation">{</span>
  <span class="token keyword">int</span> myVar<span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命名空间中可以包含变量、函数、类、结构体和枚举等，并且可以嵌套使用。例如：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">namespace</span> MyNamespace <span class="token punctuation">{</span>
  <span class="token keyword">namespace</span> InnerNamespace <span class="token punctuation">{</span>
    <span class="token keyword">int</span> innerVar<span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">innerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用命名空间中的代码时，需要使用作用域限定符 <code v-pre>::</code> 来指定具体要使用的标识符所属的命名空间。例如：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code>MyNamespace<span class="token double-colon punctuation">::</span>myVar <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token class-name">MyNamespace</span><span class="token double-colon punctuation">::</span><span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以使用 <code v-pre>using</code> 声明或 <code v-pre>using namespace</code> 声明来访问命名空间中的标识符。例如：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">using</span> MyNamespace<span class="token double-colon punctuation">::</span>myVar<span class="token punctuation">;</span>
<span class="token keyword">int</span> x <span class="token operator">=</span> myVar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，命名空间的标识符不能与其他命名空间或全局命名空间中的标识符重名，否则会导致编译错误。同时，为了保证代码的可读性和维护性，应该尽可能的将代码放进合适的命名空间中。</p>
<hr>
</div></template>


