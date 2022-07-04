---
title: App开发系列之「程序员做设计」
date: 2022-05-29 17:21
tags: [App,设计]
categories: [设计相关]
---

# 设计零基础怎么做一个App？

制作App的第一个门槛就是App的设计和素材样式，按类别分类的话，需要设计介入的主要有这么五类：

- 一、App整体UI框架设计
- 二、App所需的：icon 基础素材
- 三、App所需的：个性化素材图
- 四、好看的配色
- 五、提审时不同像素规格生成

下面我对这五类进行分别阐述。

首先最重要的一点是，你要弄清楚你的App受众群体：

- 男生多一些还是女生多一些，男生多就可以做的酷炫，女生多可以做得可爱一些
- App本身的功能和使用场景，如果是交易类软件，可以参考黑白极客风，而如果是工具类软件，可以使用专业风或者可爱风。

## 一、App整体UI框架设计

以我自己开发App「懒猫记忆」为例，最初我的App UI设定如下：

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pbz2eizdj20s30jo0uj.jpg)

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pbzdu1smj20s60j1gms.jpg)

各个功能之间基本都是持平的，四个tab基本能保证每个功能曝光的可能性都大致相同。

但第一个版本发布后，通过数据我发现这种框架设计有一些问题。

首先，不同页面的曝光和使用频次差异相当大，最高频使用的是：「今日」和「分类」，而「工具」和「我」用户基本不点击查看，或者点击后又立刻切走。

其次，App的用户群体78%是女性，且年龄偏年轻，不止一个用户反馈界面有些太极客化了，感觉有点冷漠，每天打开的感觉就像是在翻一本词典。

基于此，我对App整体UI框架进行了重新的设计：

- 整体颜色风格切至可爱风
- 底tab中留存 今日 和 分类 两大tab，「工具」和「我」这两大tab的入口进行收敛

经过这样理念的调整，我设计出的App新样式如下：

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pc5v91doj20sw10aae0.jpg)

新版本发布后，UI样式得到了用户的认可，转化率和使用率也有所提升。

如果你想知道应该采用哪个设计样式，可以去这个专门为开发者整理的设计网站：[码力全开](https://design.maliquankai.com/)，该网站作者Larry开发水平相当了得。

## 二、App所需的：icon 基础素材

目前开发中使用的素材基本都是svg格式：

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pc9600o7j20fz0kyaat.jpg)

但我们不是专业的设计师，我们怎么能拿到我们想要的svg素材呢？

这里有两大利器可以供大家参考：

### （一）阿里巴巴矢量图标库

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pck3ltpkj20yy0somza.jpg)

[iconfont: 阿里巴巴矢量图标库](https://www.iconfont.cn/)

- 亮点：素材多，没有版权风险
- 缺点：素材会比较散，要自己挑选一套素材

### （二）tablericons 1400个svg成套素材

[tablericons](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pcl3h0gej211i0u0whe.jpg)

- 亮点：svg图全部是成套的，可以批量修改线性和颜色
- 缺点：svg图只有1400个，素材没有阿里巴巴矢量库多

这俩个网站基本能够cover我们制作一个App所需要的icon了，选定icon时也要避免踩一些坑：

- icon样式尽量要统一，尽量不要outilned和filled同时出现在一个页面上，不然看上去不协调
- icon的颜色要调整好，如果没有特殊要求可以所有icon使用一个配色，除非你需要强调某个icon对应的功能

### （三）Else

如果上面两个网站还不能满足你的需求，可以尝试到[码里全开](https://design.maliquankai.com/)网站，其中「图标网站板块」罗列了N多个有用的网站。

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pd4alz3ej20xy0u044u.jpg)

## 三、App所需的：个性化素材图

个性化素材图是一个App的灵魂，Google 3D风、日本卡通可爱风和法式插画风都是目前新App比较喜欢使用的风格

### （一）Google插画风

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pclwdhayj20xc0q4whg.jpg)

Google插画虽说网站很多，但提供免费下载的网站还是比较少的，我个人喜欢去[sketchvalley](https://sketchvalley.com/)下载Google插画。

### （二）插画套图

[illustrations](https://icons8.com/illustrations/animals/cat)

插画的软件那么多？为什么我们单独把这个网站拎出来说呢？ 因为这个网站里的「套图」比较多，

比如我想做一个关于「猫」系列的主题，这个网站搜索：cat

然后点击你喜欢的插图，它就会展示一系列套图：

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pdqwvp9vj20ph103jvb.jpg)

套图会让App看起来更加和谐。

### （二）else

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pd7yqu1gj20xo0u046q.jpg)

如果上面两个网站还不能满足你的需求，可以尝试到[码里全开](https://design.maliquankai.com/)网站，其中「UI套件」罗列了N多个有用的网站。

## 四、好看的配色 

### （一）配色表

配色表的好处是让你的App看上去不那么狰狞、刺眼，比如当需要使用黄色和绿色时，你使用了下面这两种颜色，就会显得稍微刺眼，不那么高级。

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pcx4p1dhj20zf0bpjrq.jpg)

本质上说，颜色体系只有两种：冷色调和暖色调，即使是冷色调也不完全可以用黑色系代替，比如苹果将纯黑改成了磨砂黑，整体的调调就提升了不少

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pcxyghirj20j10o4jtq.jpg)

[配色表](http://tool.c7sky.com/webcolor/)可以让你更好更快地找到适合你的颜色，而不需要在调色盘上拖拽尝试，且配色表可以让你的App配色更成体系。

### （二）else

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pd79q7hoj20xm0u0dm3.jpg)

如果上面两个网站还不能满足你的需求，可以尝试到[码里全开](https://design.maliquankai.com/)网站，其中「配色推荐」罗列了N多个有用的网站。

## 五、提审时不同像素规格生成

### （一）生成提审icon资源

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pdrpxd79j20x70n9n0k.jpg)

App提审时我们需要提供不同分辨率的图片，没有设计同学时单独处理就比较麻烦，这时可以使用 [MakeAppIcon](https://makeappicon.com/)

只要你上传你要展示的图片，它会自动生成多平台不同规格的图片，一键搞定，泪目( Ĭ ^ Ĭ )

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pdtlfaxtj20hs09gmxd.jpg)

### （二）App Store样机图生成

App Store提审时，我们经常能看到别的软件展现的精美的预览图，虽然我们不是设计，但已有一些现成的网站可以帮助我们生成样机图，

可以尝试到[码里全开](https://design.maliquankai.com/)网站，其中「样机板块」罗列了N多个有用的网站。

是的，我就是这个网站的粉丝，哈哈。

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pd4na6fvj20xm0u0jxp.jpg)

## 六、其它

本来打算写到上面就结束的，但实在是处于对[码力全开](https://design.maliquankai.com/)的喜欢，我们额外补充一些内容，也扩展一些我们对设计可能性的了解。

### （一）图库网站

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pdw84t8ij20xr0u0gtu.jpg)

### （二）背景素材

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pdx2w106j20xg0u0qba.jpg)

### （三）视频素材

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pdxwlrifj20yk0gqdk3.jpg)

### （四）代码美化

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pdyb96v7j20yi0g575z.jpg)

### （五）截图美化

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pdyny07kj20ye094dhq.jpg)

### （六）字体设计

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pdz5yeyuj20xt0u07cj.jpg)

### （七）设计灵感

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pdzihziuj20yb0niafp.jpg)

### （八）Logo设计

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pe1c7uv5j20yr0nldkv.jpg)

### （九）生成头像

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h2pe1zbrzej20y00u0thh.jpg)

- - - - - 

最后也介绍一下自己做的App：「懒猫记忆」

这个App可以按照记忆曲线提醒你每日复习，

和市场上已有的App相比，我在这个App里加了自己对记忆功能的理解：

1. 通过记忆曲线合理地提醒复习的时间，做到：一次添加，终身记忆

2. 通过强制的方式让自己写下对这个知识点的总结、对自己的影响

3. 通过强制的方式在完成每日的复习后，必须写下复习感言，不写就不算复习完成。

4. 可以自定义复习曲线，如果有一些考试比较紧急的事情，我希望每天都可以复习一遍。

一句话来说：只要你添加到「懒猫记忆」里的内容，懒猫会尽可能地实现过目不忘的效果。

【下载方式】
iPhone 、Mac 、iPad 均可在 App Store 搜索：「懒猫记忆」下载

------
文章首发：[问我社区](http://www.wenwoha.com/blog_detail-1324.html)