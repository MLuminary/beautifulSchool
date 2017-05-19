var foodNum = [];
var dataStr = 'chi1<br>\
<br>\
·世上唯美食和美食不可辜负<br>\
<br>\
<br>\
chi2<br>\
<br>\
·路过一家店<br>\
·尝尝这里的春卷<br>\
<br>\
<br>\
chi3<br>\
<br>\
·白与绿 <br>\
·抹茶与奶香<br>\
<br>\
<br>\
chi4<br>\
<br>\
·有种快乐<br>\
·是<br>\
·几个朋友约火锅！！<br>\
<br>\
<br>\
chi5<br>\
<br>\
·好吃啊好吃<br>\
<br>\
<br>\
chi6<br>\
<br>\
·全湘大只推荐你吃 <br>\
·金翰林的<br>\
·小笼包！<br>\
<br>\
<br>\
chi7<br>\
<br>\
·有糕点是<br>\
·放在<br>\
·蛋壳里的<br>\
<br>\
<br>\
chi8<br>\
<br>\
·在湘大怎么能不吃 <br>\
·臭豆腐 <br>\
<br>\
<br>\
chi9<br>\
<br>\
·一进联建<br>\
·就听见<br>\
·糖油粑粑的看过来<br>\
<br>\
<br>\
chi10<br>\
<br>\
·你说你喜欢在炎热夏天<br>\
·吃冰激凌<br>\
·而我 喜欢在<br>\
·凉凉的春天<br>\
';


var d=dataStr.split('<br><br><br>');
for (var i=0;i<d.length;i++){
    var c=d[i].split('<br><br>');
    foodNum.push({
        img:c[0].replace(' ')+'.jpg',
        desc:c[1]
    });

}


