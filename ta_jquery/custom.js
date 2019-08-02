$(document).ready(function() {
    var heightHeader = $(".header").height();
    var heightNav = $(".main").height();
    var heightWelcome = $(".welcome").height();
    $(".top").hide();

    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > heightHeader) {
            $(".sticky_").css({
                "position": "fixed",
                "top": "0",
                "left": "0",
                "z-index": "999"
            }).slideDown("fast");
            $(".top").show();
        } else {
            $(".sticky_").slideUp("fast", function() {
                $(this).css({
                    "position": "relative"
                })
                $(".top").hide();
            })
        }
    }

    $(window).scroll(function() {
        stickyNav();
    })

    $(".top").click(function() {
        var posi = $(".header").offset().top;
        $("body, html").animate({
            scrollTop: posi
        }, 1000);
    })

    $(".p-profile").hide();
    $(".p-profile2").hide();

    $(".navbar-nav > a").click(function() {
        var pos = $(this).attr("navi");
        var posi = $("#" + pos).offset().top;

        $("body, html").animate({
            scrollTop: posi - 50
        }, 800);

        if (pos == "home") {
            $(".img-home").delay(800).animate({
                marginTop: "50px",
                marginBottom: "50px"
            }, 1000)
        } else if (pos == "profile") {
            $(".p-profile").delay(800).fadeIn("slow");
            $(".img-profile").delay(1200).animate({
                "right": "0"

            }, 1000, function() {
                $(".img-profile").css({
                    "right": "0",
                    "position": "relative"
                })
            })
            $(".p-profile2").delay(2500).fadeIn("slow");
        }
    })

    var scroll_menu = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > heightHeader - 50) {
            $(".img-home").animate({
                marginTop: "50px",
                marginBottom: "50px"
            }, 1000)
        }
        if (scrollTop > heightWelcome + heightHeader + heightNav) {
            $(".p-profile").delay(800).fadeIn("slow");
            $(".img-profile").delay(1200).animate({
                "right": "0"

            }, 1000, function() {
                $(".img-profile").css({
                    "right": "0",
                    "position": "relative"
                })
            })
            $(".p-profile2").delay(2500).fadeIn("slow");
        }
    }

    $(window).scroll(function() {
        scroll_menu();
    })

    $(".img-1").click(function() {
        $(".imgBig").hide();
        var a = $(this).attr("src");
        $(".imgBig").fadeIn("slow");
        $(".imgBig").attr("src", a);
    })


    $(".msg").click(function() {
        $(this).hide();
        $(".hidden-form").fadeIn("slow");
    })
})