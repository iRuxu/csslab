# CssLab 
###### Homepage: <http://csslab.cc>
###### v3旧版本不再更新，全新在v4上进行开发。2018/4/15

## 目录
+ [简介说明](#intro)
+ [使用指南](#get-started)
+ [参考文档](#documentation)
+ [其它链接](#contribute)

## <a name="intro"></a> 简介说明
csslab是一个动态css依赖库，它由一些自定义函数组成，可快速书写一些常用的css片段并自动进行计算，同时提供一些IE6/7兼容hack和简写，以便能更快捷高效地完成网页重构工作。

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
//94900655为随机数
.animate-element{
  -webkit-animation-name: fadeIn_94900655;
          animation-name: fadeIn_94900655;
  -webkit-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
  -webkit-animation-fill-mode: backwards;
          animation-fill-mode: backwards;
}
@keyframes fadeIn_94900655 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

## <a name="get-started"></a> 使用指南
##### Step.1 安装支持环境
安装nodejs，并使用npm安装less/sass；
也可以使用[koala](http://koala-app.com/index-zh.html)等可视化编译器。
同时建议安装autoprefixer插件，以生成相应浏览器前缀。

##### Step.2 引入文件
将文件下载至指定工作目录，通过正确的路径引入。
```less
//单独引入指定子函数库
@import url('base.less');
@import url('animation.less');
```

## <a name="documentation"></a> 参考文档
+ *[base](http://csslab.cc/index.html)* 
基础函数库，常用的IE6-IE8各类HACK，快捷书写函数
+ *[shape](http://csslab.cc/shape.html)* 
使用CSS绘制常用的图形
+ *[animation](http://csslab.cc/animation.html)* 
基础动画库，提供常见的动画
+ *[twinkle](http://csslab.cc/twinkle.html)* （仅v3及v3版本以前）
扩展动画库
+ *[reset](http://csslab.cc/reset.html)* 
浏览器样式重置
+ *base-fix* （仅v3及v3版本以前）
旧版base废弃函数（芒果TV）

## <a name="contribute"></a> 其它链接
+ *[CSS笔记](http://iruxu.com/notebook)*
+ *[LESS中文手册](http://less.bootcss.com/features/)*
+ *[Koala](http://koala-app.com/index-zh.html)* （一款方便的可视化前端编译器）
+ *[Silky](http://silky.wvv8oo.com)* （芒果TV使用的前端开发集成工具）
