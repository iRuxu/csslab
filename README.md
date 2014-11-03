resetcss
========

CSS重置模板,并包含常用兼容,可通过继承引用。
封装部分IE常见HACK方案（带参数）。

示例：
//在对应的样式内继承此样式，则此盒子将总是闭合。如.a{.clear;其他样式...}
```less
.clear{
    *zoom:1;
    &:after {content:"\200B"; display:block; height:0; clear:both;}
}
```

//常见的IE兼容举例，继承引用
```less
.fl{display: inline;float: left;}
.dbi{display:inline-block;*display:inline;*zoom:1;}
```

//IE6的绝对定位片段，fix为距离值，lt为左上
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

//IE6-8透明
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

其他具体见注释。

方便的可视化前端编译器koala： http://koala-app.com/index-zh.html

LESS快速入门： http://www.bootcss.com/p/lesscss/


