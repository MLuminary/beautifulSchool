$(function () {
    $('#container').fullpage({
        resize: true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: 'true',
        loopBottom: true,
        css3: true,
        loopHorizontal: true,
        // scrollOverflow:true
        afterLoad: function (anchorLink, index) {
            if (index == 2) {
                // $('.page2 .pic').fadeIn();
                $('.page2 .pic').animate({
                    'opacity': '1',
                    'right': '0px'
                }, function () {
                    $('.page2 .txt').animate({
                        'opacity': '1',
                        'padding-right': '2em'
                    });
                })

            }
            if (index == 3) {
                $('.page3 .pic').animate({
                    'opacity': '1',
                    'left': '0px'
                }, 500)
                $('.page3 .txt').animate({
                    'opacity': '1',
                    'right': '0px'
                }, 700);
            }
            if (index == 4) {

                $('.page4 .txt').animate({
                    'opacity': '1',
                    'left': '2em'
                }, function () {
                    $('.page4 .pic').animate({
                        'opacity': '1',
                        'left': '0px'
                    })
                });
            }
            if (index == 5) {
                $('.page5 .pic').animate({
                    'opacity': '1',
                    'bottom': '0px'
                }, function () {
                    $('.page5 .txt').animate({
                        'opacity': '1',
                        'top': '1em'
                    });
                })

            }
            if (index == 6) {
                $('.page6 .pic').animate({
                    'opacity': '1',
                    'top': '0px'
                }, function () {
                    $('.page6 .txt').animate({
                        'opacity': '1',
                        'bottom': '10%'
                    });
                    $('.page6 .footer').animate({
                        'opacity': "1",
                        "bottom": "0"
                    })
                })

                $('.page6 .message').animate({
                    'opacity': '1',
                    'top': '3em'
                }, 2000, function () {
                    setTimeout(function () {
                        $('.page6 .message').animate({
                            'opacity': '0',
                            'top': '-5em'
                        }, 2000)
                    }, 1000)
                })
            }
        },
        onLeave: function (index, nextIndex, direction) {
            if (index == 2) {
                // $('.page2 .pic').fadeIn();
                $('.page2 .pic').animate({
                    'opacity': '0',
                    'right': '-100px'
                })
                $('.page2 .txt').animate({
                    'opacity': '0',
                    'padding-right': '22em'
                });
            }
            if (index == 3) {
                $('.page3 .pic').animate({
                    'opacity': '0',
                    'left': '-200px'
                })
                $('.page3 .txt').animate({
                    'opacity': '0',
                    'right': '-200'
                });
            }
            if (index == 4) {
                $('.page4 .pic').animate({
                    'opacity': '0',
                    'left': '100%'
                })
                $('.page4 .txt').animate({
                    'opacity': '0',
                    'left': '-200px'
                });
            }
            if (index == 5) {
                $('.page5 .pic').animate({
                    'opacity': '0',
                    'bottom': '-300px'
                })
                $('.page5 .txt').animate({
                    'opacity': '0',
                    'top': '-200px'
                });
            }
            if (index == 6) {
                $('.page6 .pic').animate({
                    'opacity': '0',
                    'top': '-500px'
                })
                $('.page6 .txt').animate({
                    'opacity': '0',
                    'bottom': '-5px'
                });
                $('.page6 .footer').animate({
                    'opacity': "1",
                    "bottom": "-100px"
                })
            }

        }
    })
})//结束