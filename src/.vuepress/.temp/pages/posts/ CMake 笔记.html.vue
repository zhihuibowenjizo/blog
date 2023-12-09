<template><div><h1 id="cmake-笔记" tabindex="-1"><a class="header-anchor" href="#cmake-笔记" aria-hidden="true">#</a> CMake 笔记</h1>
<h2 id="cmake-概述" tabindex="-1"><a class="header-anchor" href="#cmake-概述" aria-hidden="true">#</a> CMake 概述</h2>
<p>CMake 是一个项目构建工具，并且是跨平台的。
源文件（.c .cpp） 想要变成可执行程序需要编译器处理
所谓编译器其实是一套工具链
第一部分 预处理器 (替换宏、去注释)
第二部分 编译 （通过gcc 等 生成 汇编文件）
第三部分 汇编  （通过汇编器处理完的就是二进制文件了，win 为  .obj 在 Linux 为 .o）
第四部分 链接  （把所有二进制文件进行链接，链接成一个二进制可执行文件）
如果项目文件比较多，进行打包操作时命令会非常长 ，不方便，</p>
<p>于是就可以写一个makefile脚本文件,在里面写一些指令来告诉编译器如何编译这些源文件，写好文件后要实行一个批处理命令 make ,然后程序就会根据makefile 里的要求把东西编译出来了</p>
<p>还有一种方式是使用cmake ,cmake 和 makefile 差不多，但是cmake 不依赖平台，它可以根据不同的平台来生成对应的makefile</p>
<h3 id="小科普" tabindex="-1"><a class="header-anchor" href="#小科普" aria-hidden="true">#</a> 小科普</h3>
<p>GCC：GNU Compiler Collection(GUN 编译器集合)，它可以编译C、C++、JAV、Fortran、Pascal、Object-C、Ada等语言。
gcc是GCC中的GUN C Compiler（C 编译器）
g++是GCC中的GUN C++ Compiler（C++编译器）</p>
<h3 id="动态库与静态库" tabindex="-1"><a class="header-anchor" href="#动态库与静态库" aria-hidden="true">#</a> 动态库与静态库</h3>
<p>动态库和静态库的主要区别在于它们在编译和运行时的链接方式不同。</p>
<p>静态库在编译时被链接到程序中，它们成为程序的一部分，跟随程序到处运行。这意味着静态库中的函数或类会被复制到每个使用它们的程序中，增加了程序的大小。</p>
<p>动态库在运行时被链接到程序中，它们保持独立于程序，作为一个单独的文件存在。这意味着动态库中的函数或类只需要被加载一次，就可以被多个程序共享，减少了内存的占用。</p>
<p>静态库和动态库各有优缺点，选择使用哪种类型的库取决于具体的需求和场景。</p>
<h2 id="静态库" tabindex="-1"><a class="header-anchor" href="#静态库" aria-hidden="true">#</a> 静态库</h2>
<p>在 Linux 中静态库由程序 ar 生成，现在静态库已经不像之前那么普遍了，这主要是由于程序都在使用动态库。关于静态库的命名规则如下:</p>
<p>在 Linux 中静态库以 lib 作为前缀，以.a 作为后缀，中间是库的名字自己指定即可，即: libxxx.a
在 Windows 中静态库一般以 lib 作为前缀，以 lib 作为后缀，中间是库的名字需要自己指定，即: libxxx.lib</p>
<h3 id="生成静态链接库" tabindex="-1"><a class="header-anchor" href="#生成静态链接库" aria-hidden="true">#</a> 生成静态链接库</h3>
<p>生成静态库，需要先对源文件进行汇编操作 (使用参数 -c) 得到二进制格式的目标文件 (.o 格式), 然后在通过 ar 工具将目标文件打包就可以得到静态库文件了 (libxxx.a)。</p>
<p>使用 ar 工具创建静态库的时候需要三个参数:</p>
<ul>
<li>参数c：创建一个库，不管库是否存在，都将创建。</li>
<li>参数s：创建目标文件索引，这在创建较大的库时能加快时间。</li>
<li>参数r：在库中插入模块 (替换)。默认新的成员添加在库的结尾处，如果模块名已经在库中存在，则替换同名的模块。</li>
</ul>
<h2 id="动态库" tabindex="-1"><a class="header-anchor" href="#动态库" aria-hidden="true">#</a> 动态库</h2>
<p>动态链接库是程序运行时加载的库，当动态链接库正确部署之后，运行的多个程序可以使用同一个加载到内存中的动态库，因此在 Linux 中动态链接库也可称之为共享库。</p>
<p>动态链接库是目标文件的集合，目标文件在动态链接库中的组织方式是按照特殊方式形成的。库中函数和变量的地址使用的是相对地址（静态库中使用的是绝对地址），其真实地址是在应用程序加载动态库时形成的。</p>
<p>关于动态库的命名规则如下:</p>
<p>在 Linux 中动态库以 lib 作为前缀，<a href="http://xn--onq.so" target="_blank" rel="noopener noreferrer">以.so<ExternalLinkIcon/></a> 作为后缀，中间是库的名字自己指定即可，即: <a href="http://libxxx.so" target="_blank" rel="noopener noreferrer">libxxx.so<ExternalLinkIcon/></a>
在 Windows 中动态库一般以 lib 作为前缀，以 dll 作为后缀，中间是库的名字需要自己指定，即: libxxx.dll</p>
<h3 id="生成动态链接库" tabindex="-1"><a class="header-anchor" href="#生成动态链接库" aria-hidden="true">#</a> 生成动态链接库</h3>
<p>生成动态链接库是直接使用<strong>gcc</strong> 命令并且需要添加 -fPIC（-fpic） 以及 -shared 参数。</p>
<p>-fPIC 或 -fpic 参数的作用是使得 gcc 生成的代码是与位置无关的，也就是使用相对位置。
-shared参数的作用是告诉编译器生成一个动态链接库。</p>
</div></template>


