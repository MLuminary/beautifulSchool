var how = [];
var dataStr = 'ren1<br>\
<br>\
·美丽的老师<br>\
<br>\
<br>\
ren2<br>\
<br>\
·傍晚<br>\
·回眸看向远方的白衣少年<br>\
<br>\
<br>\
ren3<br>\
<br>\
·每天出寝室 <br>\
·看见宿管阿姨<br>\
·不禁一笑<br>\
<br>\
<br>\
ren4<br>\
<br>\
·有个人守护着<br>\
·寝室的小仙女们<br>\
·门卫大爷。<br>\
<br>\
<br>\
ren5<br>\
<br>\
·清纯美丽不做作<br>\
·女神就是简单一笑都很美啊<br>\
<br>\
<br>\
ren6<br>\
<br>\
·你有注意过 <br>\
·打扫卫生的阿姨们<br>\
·笑起来  也那么美<br>\
<br>\
<br>\
ren7<br>\
<br>\
·打篮球的男孩纸<br>\
·敲级帅！！！<br>\
<br>\
<br>\
ren8<br>\
<br>\
·盛夏白连衣裙 <br>\
<br>\
<br>\
ren9<br>\
<br>\
·用书挡住阳光<br>\
·青春就是酱紫!<br>\
<br>\
<br>\
ren10<br>\
<br>\
·45度仰望天空不让眼泪掉下来<br>\
';


var d=dataStr.split('<br><br><br>');
for (var i=0;i<d.length;i++){
    var c=d[i].split('<br><br>');
    how.push({
        img:c[0].replace(' ')+'.jpg',
        desc:c[1]
    });
    // console.log(data[i].img);
}
