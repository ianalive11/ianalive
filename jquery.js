$(document).ready(function () {
    $("nav").find("li").click(function () {
        $(".ham").removeClass("ham_close");
        $("#menu").removeClass("show");
        $(".mlogo").removeClass("toggle");
        $(".logo").toggleClass("toggle");
        $(".bg_").removeClass("bg_shade");
        
        let target = $(this).data("target");
        let h = $("#" + target).offset().top;
        $("html,body").animate({
            scrollTop: h,
        })
        return false;
    });
    $(".ham").click(function () {
        $(this).toggleClass("ham_close");
        $("#menu").toggleClass("show");
        $(".mlogo").toggleClass("toggle");
        $(".logo").toggleClass("toggle");
        $(".bg_").toggleClass("bg_shade");

        let t = $(window).scrollTop();
        let h = $("#about").offset().top;
        if (t >= h) {
            $(".mlogo").removeClass("toggle");
        }
    });

    $(window).scroll(function () {
        let t = $(window).scrollTop();
        let h = $("#about").offset().top - 300;
        if (t >= h) {
            $(".slogo").fadeIn();
        } else {
            $(".slogo").fadeOut();
        }
    });

    /************************************************ lightbox */
    lightbox.option({
        'resizeDuration': 100, //lightbox縮放速度
        'fadeDuration': 300, //lightbox淡入淡出速度
        'imageFadeDuration': 600, //圖片淡入淡出速度
        'albumLabel': "%1 / %2"
    });

    /************************************************** mousewheel */
    var n = 1
    var mouseAction = 0
    $(window).mousewheel(function (e) {
        $("html,body").stop();
        if (mouseAction == 0) {
            mouseAction = 1
            if (e.deltaY == -1) {
                if (n < 5) {
                    n++
                }
            } else {
                if (n > 1) {
                    n--
                }
            }
        }
        $("html,body").animate({
            "scrollTop": $(".box" + n).offset().top
        }, function () {
            mouseAction = 0
        })
    })
})
