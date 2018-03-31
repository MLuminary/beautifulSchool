$(function () {

    //loading 加载
    var imgList = [
        "banner1.jpg",
        "banner2.jpg",
        "banner3.jpg",
        "banner4.jpg"
    ]


    var loadingProgress = 0;

    function loadFunc(curr) {
        var currImg = new Image();
        currImg.src = './images/' + imgList[curr];
        currImg.onload = function () {
            loadingProgress++;
            showProgress(Math.floor(loadingProgress / imgList.length * 100));
            curr++;
            if (curr >= imgList.length) {
                $('.loading').fadeOut();
                $('#container').fadeIn();
                $('.page1 .message').animate({
                    'opacity': '1',
                    'top': '3em'
                }, 2000, function () {
                    setTimeout(function () {
                        $('.page1 .message').animate({
                            'opacity': '0',
                            'top': '-5em'
                        }, 2000)
                    },1000)
                })
            }
            else {
                loadFunc(curr);
            }
        }
    }
    function showProgress(progressNum) {
        $('.loading .loadNum').text(progressNum);
    }



    loadFunc(0);
    // 自动播放效果

    var timer = setInterval(function () {
        $('.fp-next').click();
    }, 4000);
})