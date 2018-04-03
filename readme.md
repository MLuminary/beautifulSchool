# 美丽校园

## 效果

### 一页滚动式

运用 fullpage 插件实现的一页滚动式效果，调整 fullpage 为 `resize` 后,fullpage 会根据
网页的大小调整 `html` 的 `font-size` ,本作品边距宽高，字体的大小基本用 `em` 或者 `rem` ,所以
当页面大小发生改变的情况下,会有自适应的效果

### loading

loading 页面的实现是传统的图片加载方法

### 散列画廊

美丽校园当然要展示很多的图片了，本项目从历史，食物，校园风景，美女帅哥分别展示了
美丽的校园,按照 `vue` 的原理实现数据的展现,整个画廊全用 `js` 实现

在这里写一下散列画廊的全部实现过程吧。

```js
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

html 结果如上,首先要实现翻转效果，则要定义 3d 特效,在 `wrap` 层设置` perspective: 800px`,意味着
你离屏幕 `800` 个像素观看此 `wrap` 层里的元素, 然后 `photo` 和 `side` 层都设置绝对定位，`side`
 `front` 和 `back` 重合，因为 `back` 在后，此时 `back` 面会覆盖 `front` 面，然后在 `photo_wrap`
设置` transform-style: preserve-3d; `告诉他下面包裹的元素要呈现3d效果,`side_front` 旋转 `0deg`,
 `side_back` 旋转 `180deg` ,此时 `side_back` 背面朝上，然后在 `side` 层设置` backface-visibility: hidden; `
意味着背面朝上的就会被隐藏，此时已经做好了一张有前后面的 `photo` ，当时在 `photo_wrap` 层设置旋转中心点为
`0 50%` 只是为了有一个向右移动在翻转过来的效果。

接下来便要输出海报，将存在 `data` 中的内容添加到html文件中,用 `replace` 将 `html`中的 `{{img}}` 类似这种形式
的代码替换成本来要显示的内容,输出海报的同时给每个海报添加一个点击事件，如果在中间的话，会翻转 `180deg`，
如果点击的 `photo` 原本不在中间，就会打乱所有 `photo` 的位置，让点击的 `photo` 转换到中间，当然这个位置是要设置的，
。

## 性能优化

### 字体压缩

采用 `font-spider` 压缩字体

### 图片处理

采用在线图片压缩工具后，用 jquery 实现图片懒加载


