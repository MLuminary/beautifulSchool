# 美丽校园

### 一页滚动式

运用fullpage插件实现的一页滚动式效果，调整fullpage为` resize `后,fullpage会根据
网页的大小调整` html `的` font-size `,本作品边距宽高，字体的大小基本用em或者rem,所以
当页面大小发生改变的情况下,会有自适应的效果

### loading

loading页面的实现是传统的图片加载方法

### 散列画廊

美丽校园当然要展示很多的图片了，本项目从历史，食物，校园风景，美女帅哥分别展示了
美丽的校园,按照vue的原理实现数据的展现,整个画廊全用js实现

在这里写一下散列画廊的全部实现过程吧。
```
 <div class="wrap">
     <div class="photo photo_front" onclick="turn(this)" id="h_photo_{{index}}">
         <div class="photo_wrap">
             <div class="side side_front">
                <p class="image"><img src="./history/{{img}}" alt="{{img}}" /></p>
             </div>
             <div class="side side_back">
                   <p class="desc">{{desc}}</p>
             </div>
         </div>
     </div>
 </div>
  ```

html结果如上,首先要实现翻转效果，则要定义3d特效,在wrap层设置` perspective: 800px`,意味着
你离屏幕800个像素观看此wrap层里的元素,然后photo和side层都设置绝对定位，side
front 和back重合，因为back在后，此时back面会覆盖front面，然后在photo_wrap
设置` transform-style: preserve-3d; `告诉他下面包裹的元素要呈现3d效果,side_front旋转0deg,
side_back旋转180deg,此时side_back背面朝上，然后在side层设置` backface-visibility: hidden; `
意味着背面朝上的就会被隐藏，此时已经做好了一张有前后面的photo，当时在photo_wrap层设置旋转中心点为
0 50%只是为了有一个向右移动在翻转过来的效果。

接下来便要输出海报，将存在data中的内容添加到html文件中,用` replace `将html中的{{img}}类似这种形式
的代码替换成本来要显示的内容,输出海报的同时给每个海报添加一个点击事件，如果在中间的话，会翻转180deg，
如果点击的photo原本不在中间，就会打乱所有photo的位置，让点击的photo转换到中间，当然这个位置是要设置的，
。

[效果展示](http://haoqinzz.cn/beautifulSchool)
