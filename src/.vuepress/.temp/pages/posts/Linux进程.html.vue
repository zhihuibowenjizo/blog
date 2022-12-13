<template><div><h1 id="linux-进程" tabindex="-1"><a class="header-anchor" href="#linux-进程" aria-hidden="true">#</a> Linux 进程</h1>
<ul>
<li>进程(process)是指正在执行的程序；是程序正在运行的一个实例。它由程序指令，和从文件、其它程序中读取的数据或系统用户的输入组成。</li>
<li>每个用户都可以运行多个程序，为了区分每一个程序，Linux给每个进程都做了标识，称为进程号(process ID)，每个进程号是唯一的。<em>在/proc目录，存储有当前内核运行状态的一些特殊文件，其中就有进程号信息。</em></li>
<li>进程可以被分为
<ul>
<li>父进程(PID) 这些是在运行时创建其它进程的进程。</li>
<li>子进程(PPID) 这些是在运行时由其它进程创建的进程。</li>
</ul>
</li>
</ul>
<h2 id="systemd-init-进程" tabindex="-1"><a class="header-anchor" href="#systemd-init-进程" aria-hidden="true">#</a> systemd(init)进程</h2>
<p>init 进程是系统中所有进程的父进程，它是启动 Linux 系统后第一个运行的程序；它管理着系统上的所有其它进程。它由内核自身启动，因此理论上说它没有父进程。</p>
<p>systemd(init) 进程的进程 ID 总是为 1。它是所有孤儿进程的收养父母。（它会收养所有孤儿进程）。</p>
<h2 id="进程分类" tabindex="-1"><a class="header-anchor" href="#进程分类" aria-hidden="true">#</a> 进程分类</h2>
<ul>
<li>前台进程（也称为交互式进程） - 这些进程由终端会话初始化和控制。换句话说，需要有一个连接到系统中的用户来启动这样的进程；它们不是作为系统功能/服务的一部分自动启动。</li>
<li>后台进程（也称为非交互式/自动进程） - 这些进程没有连接到终端；它们不需要任何用户输入。</li>
</ul>
<h2 id="守护进程-daemon" tabindex="-1"><a class="header-anchor" href="#守护进程-daemon" aria-hidden="true">#</a> 守护进程(daemon)</h2>
<p>这是<strong>后台进程</strong>的特殊类型,它们在系统启动时启动，并作为服务一直运行；它们不会死亡。它们自发地作为任务启动（作为服务运行）。但是，他们能被用户通过systemd(init)进程控制</p>
<h2 id="查找进程id" tabindex="-1"><a class="header-anchor" href="#查找进程id" aria-hidden="true">#</a> 查找进程id</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># pidof systemd</span>
<span class="token comment"># pidof top</span>
<span class="token comment"># pidof httpd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在linux中启动一个进程" tabindex="-1"><a class="header-anchor" href="#在linux中启动一个进程" aria-hidden="true">#</a> 在linux中启动一个进程</h2>
<p><strong>前台启动</strong> 指一个程序控制着标准输入/输出，在程序运行时，shell 被暂时挂起，直到该程序运行结束后，才退回到 shell。在这个过程中，用户不能再执行其它程序</p>
<p><strong>后台启动</strong> 用户不必等待程序运行结束就可以执行其它程序。运行后台进程的方法是在命令行最后加上 “&amp;”</p>
<p><strong>调度方式</strong>：按照预先指定的时间执行
at
batch
cron</p>
<h2 id="后台启动的一些指令" tabindex="-1"><a class="header-anchor" href="#后台启动的一些指令" aria-hidden="true">#</a> 后台启动的一些指令</h2>
<ol>
<li>&amp;<br>
加在一个命令的最后，可以把这个命令放到后台执行</li>
<li>ctrl + z<br>
可以将一个正在前台执行的命令方后台，并且处于暂停状态。</li>
<li>jobs<br>
查看当前有多少在后台运行的命令</li>
<li>fg<br>
把后台中的命令调到前台运行。如果后台有多个命令，可以用 fg %jobnumber指定</li>
<li>bg<br>
将一个在后台暂停的命令，变成在后台继续执行。如果后台中有多个命令，可以用bg %jobnumber将选中的命令调出</li>
<li>kill<br>
将一个后台命令删除，kill %jobnumber</li>
<li>nohup
如果让程序始终在后台执行，即使关闭当前的终端也执行，这时就需要nohup。该命令可以在你退出帐户/关闭终端之后继续运行相应的进程。关闭中断后，在另一个终端jobs已经无法看到后台跑得程序了，此时利用ps（进程查看命令）</li>
</ol>
<h2 id="进程的状态" tabindex="-1"><a class="header-anchor" href="#进程的状态" aria-hidden="true">#</a> 进程的状态</h2>
<p>在执行过程中，取决于它的环境一个进程会从一个状态转变到另一个状态。在 Linux 中，一个进程有下面的可能状态：</p>
<ul>
<li>Running - 此时它正在运行（它是系统中的当前进程）或准备运行（它正在等待分配 CPU 单元）。</li>
<li>Waiting - 在这个状态，进程正在等待某个事件的发生或者系统资源。另外，内核也会区分两种不同类型的等待进程；可中断等待进程interruptible waiting processes - 可以被信号中断，以及不可中断等待进程uninterruptible waiting processes- 正在等待硬件条件，不能被任何事件/信号中断。</li>
<li>Stopped - 在这个状态，进程已经被停止了，通常是由于收到了一个信号。例如，正在被调试的进程。</li>
<li>Zombie - 该进程已经死亡，它已经停止了但是进程表process table中仍然有它的条目。</li>
</ul>
</div></template>


