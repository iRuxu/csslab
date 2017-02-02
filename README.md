LessLab
========

#### 项目简介
这是芒果TV （www.mgtv.com） 公共库的一部分，由iRuxu主要负责开发，基本工具函数主要用于提升团队成员工作效率，部分业务模块专用专项应用于芒果TV视频网站。

#### 文件索引
+ base - 组合常用的IE6-IE8各类HACK，部分CSS快捷的书写方式
+ shape - 使用CSS绘制常用的图形
+ animation - 基础动画库
+ twinkle - 扩展动画库
+ reset - 浏览器样式重置，含部分移动端webkit属性

#### 存在问题
+ 部分没有添加全部浏览器前缀，建议在生产环境中仍然使用autoprefix进行补全
+ 下个版本中添加.scss版本，解决animation库函数多次调用不同参数时的问题
+ 即将添加gradient库，用于快速生成常用的渐变样式

#### 其他相关
+ 使用手册 - http://csslab.cc
+ CSS笔记 - http://iruxu.com/notebook
+ LESS中文手册 http://less.bootcss.com/features/
+ SASS中文手册 http://sass.bootcss.com/docs/sass-reference/
+ Koala，一款方便的可视化前端编译器 http://koala-app.com/index-zh.html
+ Silky，芒果TV使用的前端开发集成工具 http://silky.wvv8oo.com
