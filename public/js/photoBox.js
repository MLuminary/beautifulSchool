//获取到data.js中的data
var data = his;
var how = how;
var foodNum = foodNum;
var liberalNum = liberalNum;
var viewNum = viewNum;


// 类似jquery的函数
function get(selector) {
    var method = selector.substr(0, 1) == "." ? 'getElementsByClassName' : 'getElementById';
    return document[method](selector.substr(1));
}





// // 在此获取全部photos
// var photos = get('.photo');
// var spans = get('.i');
// var wrap = get('.wrap');






//翻转photo
function turn(elem) {

    var cls = elem.className;
    //获取当前正中海报的次序
    var n = elem.getAttribute('id').split('_')[2];
    var type = elem.getAttribute('id').split('_')[0];

    // console.log(type)
    if (!/photo_center/.test(cls)) {
        return rsort(n,type);
    }


    if (/photo_front/.test(cls)) {
        cls = cls.replace(/photo_front/, 'photo_back');
        switch(type){
            case 'h':
            get('#h_nav_' + n).className += ' i_back ';
            break;
            case 'd':
            get('#d_nav_' + n).className += ' i_back ';
            break;
            case 'f':
            get('#f_nav_' + n).className += ' i_back ';
            break;
            case 'l':
            get('#l_nav_' + n).className += ' i_back ';
            break;
            case 'v':
            get('#v_nav_' + n).className += ' i_back ';
            break;
        }
        
    } else {
        cls = cls.replace(/photo_back/, 'photo_front');
        switch(type){
            case 'h':
            get('#h_nav_' + n).className = get('#h_nav_' + n).className.replace(/\s*i_back\s*/, ' ');
            break;
            case 'd':
            get('#d_nav_' + n).className = get('#d_nav_' + n).className.replace(/\s*i_back\s*/, ' ');
            break;
            case 'f':
            get('#f_nav_' + n).className = get('#f_nav_' + n).className.replace(/\s*i_back\s*/, ' ');
            break;
            case 'l':
            get('#l_nav_' + n).className = get('#l_nav_' + n).className.replace(/\s*i_back\s*/, ' ');
            break;
            case 'v':
            get('#v_nav_' + n).className = get('#v_nav_' + n).className.replace(/\s*i_back\s*/, ' ');
            break;
        }
       
    }

    elem.className = cls;
}

//输出所有海报
function addPhotos() {
    
    var template = get('.wrap')[0].innerHTML;

    var html = [];
    var nav = [];


    for (s in data) {
        var _html = template
            .replace('{{index}}', s)
            .replace('{{img}}', data[s].img)
            .replace('{{desc}}', data[s].desc);

        html.push(_html);

        nav.push('<span id="h_nav_' + s + '" onclick="turn(get(\'#h_photo_' + s + '\'))" class="i"></span>')


    }
    html.push('<div class="nav">' + nav.join('') + '</div>');

    //将数组连接成字符串
    get('.wrap')[0].innerHTML = html.join('');
    // rsort(random([0, data.length-1]),'h');

    howard();
    food();
    liberal();
    view();
    
}
//先添加所有元素
addPhotos();

//随机生成一个值
function random(range) {
    var max = Math.max(range[0], range[1]);
    var min = Math.min(range[0], range[1]);

    var diff = max - min;//差值

    var number = Math.ceil(Math.random() * diff + min);//加上min要不然最小可能为0

    return number;
}


//左右分区的取值范围
function range() {
    var range = { left: { x: [], y: [] }, right: { x: [], y: [] } };

    var wrap = {
        w: get('.wrap')[0].clientWidth,
        h: get('.wrap')[0].clientHeight
    }
    var photo = {
        w: get('.photo')[0].clientWidth,
        h: get('.photo')[0].clientHeight
    }

    range.left.x = [photo.h, wrap.w / 2];
    range.left.y = [0, wrap.h];

    range.right.x = [wrap.w / 2, wrap.w];
    range.right.y = [0, wrap.h];



    return range;
}


//排序海报
function rsort(n,type) {


    switch(type){
        case 'h':
        var photo_center = get('#h_photo_' + n);
        var nav_i = get('#h_nav_'+n);
        var navs = $('.page1 .i');
        var _photos = $('.page1 .photo')
        restart(_photos);
        break;
        case 'd':
        var photo_center = get('#d_photo_' + n);
        var nav_i = get('#d_nav_'+n);
        var navs = $('.page2 .i')
        var _photos = $('.page2 .photo')
        restart(_photos);
        break;
        case 'f':
        var photo_center = get('#f_photo_' + n);
        var nav_i = get('#f_nav_'+n);
        var navs = $('.page3 .i')
        var _photos = $('.page3 .photo')
        restart(_photos);
        break;
        case 'l':
        var photo_center = get('#l_photo_' + n);
        var nav_i = get('#l_nav_'+n);
        var navs = $('.page4 .i')
        var _photos = $('.page4 .photo')
        restart(_photos);
        break;
        case 'v':
        var photo_center = get('#v_photo_' + n);
        var nav_i = get('#v_nav_'+n);
        var navs = $('.page5 .i')
        var _photos = $('.page5 .photo')
        restart(_photos);
        break;


    }
    // var photo_center = get('#h_photo_' + n);
    photo_center.className += ' photo_center ';
    
    //翻转控制按钮
    for (var i = 0; i < navs.length; i++) {
        navs[i].className = navs[i].className.replace(/\s*i_current\s*/, '');
        navs[i].className = navs[i].className.replace(/\s*i_back\s*/, '');
    }
    // var nav_i = get('#h_nav_'+n);
    nav_i.className += ' i_current ';
    photos.splice(n, 1);

    //把海报分为左、右区域两个部分
    var photos_left = photos.splice(0, Math.ceil(photos.length / 2));
    var photos_right = photos;

    //获取范围
    var rangeNum = range();
    for (var i = 0; i < photos_left.length; i++) {
        var photo_left = photos_left[i];

        photo_left.style.left = random(rangeNum.left.x) + 'px';
        photo_left.style.top = random(rangeNum.left.y) + 'px';

        photo_left.style['transform'] = 'rotate(' + random([-150, 150]) + 'deg) scale(1.0)';
    }
    for (var i = 0; i < photos_right.length; i++) {
        var photo_right = photos_right[i];

        photo_right.style.left = random(rangeNum.right.x) + 'px';
        photo_right.style.top = random(rangeNum.right.y) + 'px';
        photo_right.style['transform'] = 'rotate(' + random([-150, 150]) + 'deg) scale(1.0)';
    }
}
//回复原始
function restart(_photos){
    //不是标准数组，不支持sort等一系列操作数组的函数
    photos = [];

    //将以前的样式全部清空
    for (var i = 0; i < _photos.length; i++) {
        

        _photos[i].className = _photos[i].className.replace(/photo_center/, '');
        _photos[i].className = _photos[i].className.replace(/photo_back/, 'photo_front');

        _photos[i].style.left = "";
        _photos[i].style.top = "";

        _photos[i].style.transform = 'rotate(360deg) scale(1.3)';


        photos.push(_photos[i]);//将他化成标准数组

    }
}



//输出德义颜海报
function howard(){
    var howtemplate = get('.wrap')[1].innerHTML;

    var howhtml = [];
    var hownav = [];

    for(s in how){
        var _html = howtemplate
            .replace('{{index}}',s)
            .replace('{{img}}',how[s].img)
            .replace('{{desc}}',how[s].desc);

        howhtml.push(_html);

        hownav.push('<span id="d_nav_' + s + '" onclick="turn(get(\'#d_photo_' + s + '\'))" class="i"></span>')
    }
    howhtml.push('<div class="nav">' + hownav.join('') + '</div>');


    get('.wrap')[1].innerHTML = howhtml.join('');
    // rsort(random([0,how.length-1]),'d');
}

//输出吃的函数
function food(){
    var foodtemplate = get('.wrap')[2].innerHTML;

    var foodhtml = [];
    var foodnav = [];
   
    for(s in foodNum){
        var _html = foodtemplate
            .replace('{{index}}',s)
            .replace('{{img}}',foodNum[s].img)
            .replace('{{desc}}',foodNum[s].desc);

        foodhtml.push(_html);

        foodnav.push('<span id="f_nav_' + s + '" onclick="turn(get(\'#f_photo_' + s + '\'))" class="i"></span>')
    }
    foodhtml.push('<div class="nav">' + foodnav.join('') + '</div>');


    get('.wrap')[2].innerHTML = foodhtml.join('');
    // rsort(random([0,how.length-1]),'d');
}

function liberal(){
    var libtemplate = get('.wrap')[3].innerHTML;

    var libhtml = [];
    var libnav = [];
   
    for(s in liberalNum){
        var _html = libtemplate
            .replace('{{index}}',s)
            .replace('{{img}}',liberalNum[s].img)
            .replace('{{desc}}',liberalNum[s].desc);

        libhtml.push(_html);

        libnav.push('<span id="l_nav_' + s + '" onclick="turn(get(\'#l_photo_' + s + '\'))" class="i"></span>')
    }
    libhtml.push('<div class="nav">' + libnav.join('') + '</div>');


    get('.wrap')[3].innerHTML = libhtml.join('');
    // rsort(random([0,how.length-1]),'d');
}
function view(){
    var viewtemplate = get('.wrap')[4].innerHTML;

    var viewhtml = [];
    var viewnav = [];
   
    for(s in viewNum){
        var _html = viewtemplate
            .replace('{{index}}',s)
            .replace('{{img}}',viewNum[s].img)
            .replace('{{desc}}',viewNum[s].desc);

        viewhtml.push(_html);

        viewnav.push('<span id="v_nav_' + s + '" onclick="turn(get(\'#v_photo_' + s + '\'))" class="i"></span>')
    }
    viewhtml.push('<div class="nav">' + viewnav.join('') + '</div>');


    get('.wrap')[4].innerHTML = viewhtml.join('');
    // rsort(random([0,how.length-1]),'d');    
}










