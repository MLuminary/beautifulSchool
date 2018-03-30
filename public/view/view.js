var viewNum = [];
var dataStr = 'view1<br>\
<br>\
·翠绿翠绿电话亭<br>\
<br>\
<br>\
view2<br>\
<br>\
·三拱门<br>\
·梦想启航的地方<br>\
<br>\
<br>\
view3<br>\
<br>\
·画眉滩 <br>\
·走一走 <br>\
<br>\
<br>\
view4<br>\
<br>\
·逸夫楼<br>\
·不一样的角度<br>\
·不一样的画面<br>\
<br>\
<br>\
view5<br>\
<br>\
·学活<br>\
·钟声传来<br>\
<br>\
<br>\
view6<br>\
<br>\
·书山有路勤未径 <br>\
·学海无涯苦作舟<br>\
<br>\
<br>\
view7<br>\
<br>\
·书山<br>\
<br>\
<br>\
view8<br>\
<br>\
·镜中的新体 <br>\
·黄昏 <br>\
·忙完一天 <br>\
·去健身 <br>\
<br>\
<br>\
view9<br>\
<br>\
·双子塔<br>\
·春天我们一起去看樱花吧<br>\
<br>\
<br>\
view10<br>\
<br>\
·等小黄的时候<br>\
·是否注意到<br>\
·左边树木排排<br>\
';


var d=dataStr.split('<br><br><br>');
for (var i=0;i<d.length;i++){
    var c=d[i].split('<br><br>');
    viewNum.push({
        img:c[0].replace(' ')+'.jpg',
        desc:c[1]
    });
    // console.log(data[i].img);
}


