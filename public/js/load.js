$(function () {

    //loading 加载
    var imgList = [
        "./food/chi1.jpg",
        // "./food/chi2.jpg",
        // "./food/chi3.jpg",
        // "./food/chi4.jpg",
        // "./food/chi5.jpg",
        // "./food/chi6.jpg",
        // "./food/chi7.jpg",
        // "./food/chi8.jpg",
        // "./food/chi9.jpg",
        // "./food/chi10.jpg",
        "./Liberal/wen1.jpg",
        // "./Liberal/wen2.jpg",
        // "./Liberal/wen3.jpg",
        // "./Liberal/wen4.jpg",
        // "./Liberal/wen5.jpg",
        // "./Liberal/wen6.jpg",
        // "./Liberal/wen7.jpg",
        // "./Liberal/wen8.jpg",
        // "./Liberal/wen9.jpg",
        // "./Liberal/wen10.jpg",
        "./view/view1.jpg",
        // "./view/view2.jpg",
        // "./view/view3.jpg",
        // "./view/view4.jpg",
        // "./view/view5.jpg",
        // "./view/view6.jpg",
        // "./view/view7.jpg",
        // "./view/view8.jpg",
        // "./view/view9.jpg",
        // "./view/view10.jpg",
        "./Howard/ren1.jpg",
        // "./Howard/ren2.jpg",
        // "./Howard/ren3.jpg",
        // "./Howard/ren4.jpg",
        // "./Howard/ren5.jpg",
        // "./Howard/ren6.jpg",
        // "./Howard/ren7.jpg",
        // "./Howard/ren8.jpg",
        // "./Howard/ren9.jpg",
        // "./Howard/ren10.jpg",
        "./history/lao1.jpg",
        // "./history/lao2.jpg",
        // "./history/lao3.jpg",
        // "./history/lao4.jpg",
        // "./history/lao5.jpg",
        // "./history/lao6.jpg",

    ]


    var loadingProgress = 0;

    function loadFunc(curr) {
        var currImg = new Image();
        currImg.src = imgList[curr];
        currImg.onload = function () {
            loadingProgress++;
            showProgress(Math.floor(loadingProgress / imgList.length * 100));
            curr++;
            if (curr >= imgList.length) {
                $('.loading').fadeOut();
                $('.message').animate({
                    'opacity': '1',
                    'top': '3em'
                }, 2000, function () {
                    setTimeout(function () {
                        $('.message').animate({
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

})