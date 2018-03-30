$(function () {
    $('#container').fullpage({
        resize: true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: "true",
        loopBottom: true,
        css3: true,
        loopHorizontal: true,
        afterLoad: function (anchorLink, index) {
                $('.head li').eq(index).addClass('active').siblings().removeClass('active');
        }
    });
});