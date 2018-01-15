$(document).ready(function() {

    // Facebook-symbol
    fbHover();
    
    // Header
    headerHover();
    
    // Fading in parallax background image
    $("#hero").fadeTo(1000, 1);
    
    // Click-listener on menu toggle
    menuClick();

    // Image gallery, large image clicklistener
    largeImgClickListener();
    // Image gallery, small image clicklistener
    smallImgClickListener();

});

function menuClick() {
    $("#icon > a").click(function() {
        console.log("Click");
        if ($("#main-menu").hasClass("compact"))
            $(".menu").removeClass("compact");
        else
            $("#main-menu").addClass("compact");
    });
}

function fbHover() {
    // Hover on Facebook-symbol, fading in span with text.
    $("#fb").hover(function() {
        $(this).find("span").fadeIn(500);
    }, function() {
        $(this).find("span").fadeOut(500);
    });

}

function headerHover() {
    // Flag, bakground-fade. 
    var faded = false;

    // Hover on banner, changing opacity
    $("header").hover(function() {
        if (faded == true) {
            $(this).fadeTo(500, 1);
        }
    }, function() {
        if (faded == true) {
            $(this).fadeTo(500, 0.25);
        }
    });

    // Fading out if reload, and banner not on top
    if ($(window).scrollTop() == 0) {
        $("header").fadeTo(500, 1);
        faded = false;
    } else {
        $("header").fadeTo(500, 0.25);
        faded = true;
    }

    // Fading banner on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() == 0) {
            if (faded == true) {
                $("header").fadeTo(500, 1);
                faded = false;
            }
        } else {
            if (faded == false) {
                $("header").fadeTo(500, 0.25);
                faded = true;
            }
        }
    });

}

function smallImgClickListener() {
    // Image gallery. Expanding chosen image, and fading background
    $(".polaroid > img").click(function() {

        // Retrieving position of the clicked image
        var index = $(".polaroid").children("img").index($(this)) + 1;

        // Finding image, named after index.
        var imagePath = 'graphics/northern-lights-' + index + '.jpg';

        $("#background-fade").css("display", "block");
        $("#large-img").css("display", "block");
        $("#large-img").attr("src", imagePath)
    });
}

function largeImgClickListener() {
	// Image gallery. Minimizing chosen image, fading background back in.
    $("#large-img-container").click(function() {
        // Background fade hidden
        $("#background-fade").css("display", "none");
        // Large image hidden
        $("#large-img").css("display", "none");
    });
}