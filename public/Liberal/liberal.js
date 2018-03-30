var liberalNum = [];
var dataStr = 'wen1<br>\
<br>\
·有种美丽的风景是书架尽头站着你<br>\
<br>\
<br>\
wen2<br>\
<br>\
·老师和同学们研究项目<br>\
<br>\
<br>\
wen3<br>\
<br>\
·湘大某学术报告现场 <br>\
<br>\
<br>\
wen4<br>\
<br>\
·穿上白大褂<br>\
·一起做实验！！<br>\
<br>\
<br>\
wen5<br>\
<br>\
·毕业典礼上校长拨动橞<br>\
·告别<br>\
·说再见<br>\
<br>\
<br>\
wen6<br>\
<br>\
·第十一届挑战杯 <br>\
·湖南省湘大大学队<br>\
<br>\
<br>\
wen7<br>\
<br>\
·学术报告厅<br>\
·有种美丽 是我们研究着努力着<br>\
·学习着<br>\
<br>\
<br>\
wen8<br>\
<br>\
·上课时老师美丽的身姿 <br>\
<br>\
<br>\
wen9<br>\
<br>\
·留学生毕业<br>\
<br>\
<br>\
wen10<br>\
<br>\
·学术奖项<br>\
·智慧的美丽<br>\
';


var d=dataStr.split('<br><br><br>');
for (var i=0;i<d.length;i++){
    var c=d[i].split('<br><br>');
    liberalNum.push({
        img:c[0].replace(' ')+'.jpg',
        desc:c[1]
    });
    // console.log(data[i].img);
}


