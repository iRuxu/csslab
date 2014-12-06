iruxucss
========

# 文件概览
1. reset.css 浏览器样式重置,含移动端部分webkit属性
2. base.less 组合常用的IE6-IE8各类HACK,以及部分属性更简洁的命名
3. animation.less 一个自用整理和写的小清新CSS3动画库
4. ui.less 一些css界面绘制功能
5. grandient.less 自用渐变库
6. common.less 全局变量声明,根元素及默认样式定义
7. main.less 主体css文件与响应式设计框架
# 可选文件
1. booticon.css Bootstrap使用的Glyphicons图标库，图标索引http://v3.bootcss.com/components/ 对应用图标的span给对应样式名
2. iconfont.css 自用的iconfont图标库


# [base.less示例]
+ 在对应的样式内继承此样式,则此盒子将总是闭合,避免污染HTML。如.a{.clear;其他样式...}
```less
.clear{
    *zoom:1;
    &:after {content:"\200B"; display:block; height:0; clear:both;}
}
```

+ 常见的IE兼容举例，继承引用
```less
.fl{float:left;_display: inline;}
.dbi{display:inline-block;*display:inline;*zoom:1;}
```

+ IE6的绝对定位片段，fix为距离值，lt为左上
```less
.fixed(lt,@fix){
    position: fixed;
    left:0px;
    top:0px;
    z-index: 999;
    _position:absolute;
    _top:~'expression(eval(document.documentElement.scrollTop + @{fix}))';
    overflow:hidden; 
    *zoom:1;
}
```

+ IE6-8 rgba透明
```less
.rgba(@r,@g,@b,@tm){
    @rgba:rgba(@r,@g,@b,@tm);
    @ietm:argb(@rgba);
    background: @rgba;
    filter:progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr=@ietm, endColorstr=@ietm);
}
```

# 更多说明
1. [iRuxu的CSS手册] http://iruxu.com/notebook
2. [koala] 一款方便的可视化前端编译器 http://koala-app.com/index-zh.html
3. [LESS] 快速入门中文手册 http://www.bootcss.com/p/lesscss/
4. 其他具体见文件内注释。


