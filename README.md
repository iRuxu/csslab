iruxucss
========

# 文件概览
1. reset.css 浏览器样式重置,含移动端部分webkit属性
2. base.less 组合常用的IE6-IE8各类HACK,以及部分属性更简洁的命名
3. animation.less 一个自用整理和写的小清新CSS3动画库
4. booticon.css Bootstrap使用的Glyphicons图标库，图标索引http://v3.bootcss.com/components/ 对应用图标的span给对应样式名
5. iconfont.css 自用的iconfont图标库
6. common.less 基础元素的一些样式声明与响应式设计框架


# [base.less示例]
+ 在对应的样式内继承此样式，则此盒子将总是闭合。如.a{.clear;其他样式...}
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

+ IE6-8透明
```less
.tm(@tm){
    @alpha:@tm*100;
    opacity:@tm; //ie9 webkit etc.
    filter:alpha(opacity=@alpha); //ie5-ie7
}
.rgba(@r,@g,@b,@tm){
    @rgba:rgba(@r,@g,@b,@tm);
    @ietm:argb(@rgba);
    background: @rgba;
    filter:progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr=@ietm, endColorstr=@ietm);
}
.tmpng(@url){ 
    //please and a url like 'img/images.png' , dont's lose the quotes
    //you should let this css file are the same path with html file
    //or you should add a absolute path
    background-image:url(@url);
    _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=@url);
    // a{_position:relative;} maybe you can delete this line
}
```

# 更多说明
1. [iRuxu的CSS手册] http://iruxu.com/notebook
2. [koala] 一款方便的可视化前端编译器 http://koala-app.com/index-zh.html
3. [LESS] 快速入门中文手册 http://www.bootcss.com/p/lesscss/
4. 其他具体见注释。


