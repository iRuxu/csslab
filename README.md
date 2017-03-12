# CssLab 
###### Homepage: <http://csslab.cc>

## 目录
+ [简介说明](#intro)
+ [使用指南](#get-started)
+ [参考文档](#documentation)
+ [其它链接](#contribute)

## <a name="intro"></a> 简介说明
csslab是一个动态css依赖库，支持less和sass两个版本。它由一些less/sass自定义函数组成，可快速书写一些常用的css片段并自动进行计算，同时提供一些IE6/7兼容hack和简写，以便能更快捷高效地完成网页重构工作。
>csslab，原名Lesslab，是[芒果TV](http://www.mgtv.com) PC Web前端公共库1.0中的一部分，目前它独立作为一个项目在进行。

##### Example.1 常见片段
例如，常见的让文本禁止换行，溢出的部分处理为显示“...”：
```less
.textline{
    .nobreak;
}

//编译后输出为
.textline{
    white-space:nowrap;
    word-wrap:normal;
    word-break:keep-all;
    text-overflow:ellipsis;
    overflow:hidden;
}
```

##### Example.2 自动计算
例如，让一个已知尺寸的元素总是自动绝对居中定位：
```less
.fixwindow{
    .size(400px,300px);
    .ct(400px,300px);
}

//编译后输出为
.fixwindow{
    width:400px;
    height:300px;
    position:absolute;
    left:50%;
    top:50%;
    margin-left:-200px;
    margin-top:-150px;
}
```

##### Example.3 动画调用
传入参数指定动画的时间，并且只有调用该动画时生成对应keyframes，不会因需使用动画库中一个定义帧而要引入全部内容或繁琐地剪切粘贴：
```less
.animate-element{
    .fadeIn(2s);
}
//编译后输出为
@keyframes fadeIn{
    0%{opacity:0;}
    100%{opacity:1;}
}
.animate-element{
    animation-name:fadeIn;
    animation-duration:2s;
    animation-timing-function:ease-out;
    animation-fill-mode:backwards;
}
```

绝大多数功能均以函数存在（除个别说明可直接作为class使用外，详见对应手册条目），不调用该函数时，其它内容不会被编译输出在最终css文件中，能有效减少冗余代码加载。
当多个类需要使用同一个函数组时，可以局部定义一个临时类，其它类继承该类即可。
```less
.tempClass{
    .pa;.lt(0,0);
}
.ex1{
    &:extend(.tempClass);
}
...
.ex2{
    &:extend(.tempClass);
}
//编译后输出为
.tempClass,.ex1,.ex2{
    position:abosulte;left:0;top:0;
}
```


## <a name="get-started"></a> 使用指南
##### Step.1 安装支持环境
+ *LESS/SASS*
安装nodejs，并使用npm安装less或sass，也可以使用[koala](http://koala-app.com/index-zh.html)等可视化编译器。

+ *Autoprefixer*
同时建议安装autoprefixer插件，通过插件指定浏览器前缀版本。

##### Step.2 引入文件
+ 通用环境
直接下载至工作目录，通过正确的路径引入。
```less
//单独引入指定子函数库
@import url('base.less');
@import url('animation.less');
```

+ Silky环境 *(芒果TV)*
首先使用silky命令进行安装 **_silky install csslab_**
```less
//在某个文件中引入某个库
@import url('@{csslab}/base.less');

//默认作为整个项目所有less文件的支持函数库
在package.json中配置 
"sp-less": {
  "global": ["csslab"]
}
```

## <a name="documentation"></a> 参考文档
+ *[base](http://csslab.cc/base.html)* 
基础函数库，常用的IE6-IE8各类HACK，快捷书写函数
+ *[shape](http://csslab.cc/shape.html)* 
使用CSS绘制常用的图形
+ *[animation](http://csslab.cc/animation.html)* 
基础动画库，提供常见的动画
+ *[twinkle](http://csslab.cc/twinkle.html)* 
扩展动画库
+ *[reset](http://csslab.cc/reset.html)* 
浏览器样式重置
+ *base-fix* 
旧版base废弃函数（芒果TV）

## <a name="contribute"></a> 其它链接
+ *[CSS笔记](http://iruxu.com/notebook)*
+ *[LESS中文手册](http://less.bootcss.com/features/)*
+ *[SASS中文手册](http://sass.bootcss.com/docs/sass-reference/)*
+ *[Koala](http://koala-app.com/index-zh.html)* （一款方便的可视化前端编译器）
+ *[Silky](http://silky.wvv8oo.com)* （芒果TV使用的前端开发集成工具）
