CssLab
========

#### 项目简介
+ 这是一个css依赖库，由一些less/sass自定义函数组成，用于快速完成一些常用的css片段，以便能更快捷高效地完成网页重构工作。
+ 它需要在less/sass预编译环境下使用，你可以在需要使用的文件中提前引用或自定义为插件默认引用。
+ 绝大多数功能均以函数存在（除个别说明可直接作为class使用外），不调用该函数时，其它内容不会被编译输出在最终css文件中，能有效减少冗余代码加载。
+ 它原先作为芒果TV（www.mgtv.com）PC Web前端公共库1.0中的一部分，现在它独立作为一个项目在进行。

#### 使用方法
+ 在less文件中引入
```less
@import url('base.less');
```

#### 注意事项
+ 你需要使用autoprefix或其它类似插件来进行自动补全浏览器前缀以便兼容低版本。
+ 动画库的less版本不支持同一个函数被传入不同参数多次调用。

#### 文件索引
+ base - 组合常用的IE6-IE8各类HACK，部分CSS快捷的书写方式
+ shape - 使用CSS绘制常用的图形
+ animation - 基础动画库，提供常见的动画
+ twinkle - 扩展动画库
+ reset - 浏览器样式重置，含部分移动端webkit属性

#### 其他相关
+ 使用手册 - http://csslab.cc
+ CSS笔记 - http://iruxu.com/notebook
+ LESS中文手册 http://less.bootcss.com/features/
+ SASS中文手册 http://sass.bootcss.com/docs/sass-reference/
+ Koala，一款方便的可视化前端编译器 http://koala-app.com/index-zh.html
+ Silky，芒果TV使用的前端开发集成工具 http://silky.wvv8oo.com
