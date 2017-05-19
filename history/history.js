var his = [];
var dataStr = 'lao1<br>\
<br>\
·湘潭大学<br>\
·首届入校新生军训时留影<br>\
·1975.9<br>\
<br>\
<br>\
lao2<br>\
<br>\
·湘潭大学全校运动会<br>\
·带着草帽，滚动小球！<br>\
<br>\
<br>\
lao3<br>\
<br>\
·湘潭大学开学典礼 <br>\
·众坐一堂，等待开学，<br>\
·憧憬未来<br>\
<br>\
<br>\
lao4<br>\
<br>\
·湘潭大学化工系88级环境工程2班<br>\
·毕业合影<br>\
·轻轻说句再见。<br>\
<br>\
<br>\
lao5<br>\
<br>\
·湘潭大学教职工全体同学义务劳动<br>\
·集体劳动种体验快乐<br>\
<br>\
<br>\
lao6<br>\
<br>\
·湘潭大学初景 <br>\
·毛主席说：“一定要把湘潭大学办好”<br>\
';

var d=dataStr.split('<br><br><br>');
for (var i=0;i<d.length;i++){
    var c=d[i].split('<br><br>');
    his.push({
        img:c[0].replace(' ')+'.jpg',
        desc:c[1]
    });
    // console.log(data[i].img);
}
