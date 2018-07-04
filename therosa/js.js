$(document).ready(function () {
    $(".ham").click(function () {
        $(this).toggleClass("ham_close");
        $("nav").toggleClass("show");
        $(".nav").toggleClass("shade");
    })

    $(window).scroll(function () {
        let h = $(window).height();
        if ($(window).scrollTop() >= h - 80) {
            $(".nav").addClass("nav_change");
        } else {
            $(".nav").removeClass("nav_change");
        }
    })

    $("nav").find("a").click(function () {
        $(".ham").removeClass("ham_close");
        $("nav").removeClass("show");
        $(".nav").removeClass("shade");
        
        let target = $(this).data("target");
        let h = $("#" + target).offset().top;
        let w = $(window).width();
        console.log(w);
        if(w >= 1217 - 17){
            $("html,body").animate({
                scrollTop: h-80
            });
        }else{
            $("html,body").animate({
                scrollTop: h+2
            });
        }
    })
    $("#top").click(function(){
        $("html,body").animate({scrollTop:0})
    })
})
