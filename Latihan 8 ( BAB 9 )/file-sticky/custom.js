$(document).ready(function() {
    var heightHeader = $(".header").height();

    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > heightHeader) {
            $(".nav").css({
                "position": "fixed",
                "top": "0",
                "left": "0",
                "z-index": "999"
            }).slideDown("fast");
        } else {
            $(".nav").slideUp("fast", function() {
                $(this).css({
                    "position": "relative"
                })
            })
        }
    }

    $(window).scroll(function() {
        stickyNav();
    })

    $(".nav > span, .main > span").click(function() {
        var pos = $(this).attr("class");
        var posi = $("#" + pos).offset().top;

        $("body, html").animate({
            scrollTop: posi - 40
        }, 800)
    })
})