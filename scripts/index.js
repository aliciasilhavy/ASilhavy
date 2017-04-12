/*
SHOW AND HIDE FUNCTIONS 
*/

function closeThings(selector) {
    $(selector).removeClass("openAnimate").addClass("closeAnimate");
    setTimeout(function () {
        $(selector).addClass("hide").removeClass("show")
    }, 200);
}

function showThings(selector) {
    $(selector).addClass("show").removeClass("hide");
    $(selector).removeClass("closeAnimate").addClass("openAnimate");
}

function showSlide(selector, closeBtn) {
    $(selector).addClass("show").removeClass("hide");
    $(selector).addClass("slideIn").removeClass("slideOut");
    $(closeBtn).addClass("slideIn").removeClass("slideOut");
}

function hideSlide(selector, closeBtn) {
    $(closeBtn).addClass("slideOut").removeClass("slideIn");
    setTimeout(function () {
        $(selector).addClass("slideOut").removeClass("slideIn");
    }, 200);
    setTimeout(function () {
        $(selector).addClass("hide").removeClass("show");
    }, 400);
}

function showSlideLeft(selector, closeBtn) {
    $(selector).addClass("show").removeClass("hide");
    $(selector).addClass("slideInLeft").removeClass("slideOutLeft");
    $(closeBtn).addClass("slideInLeft").removeClass("slideOutLeft");
}

function hideSlideLeft(selector, closeBtn) {
    $(closeBtn).addClass("slideOutLeft").removeClass("slideInLeft");
    setTimeout(function () {
        $(selector).addClass("slideOutLeft").removeClass("slideInLeft");
    }, 100);
    setTimeout(function () {
        $(selector).addClass("hide").removeClass("show");
    }, 300);
}
/*
SHOW AND HIDE CALLS 
*/
$("#personal-btn").click(function () {
    showSlide("#personal", ".close-personal");
});
$(".close-personal").click(function () {
    hideSlide("#personal", ".close-personal");
});
$("#burger").click(function () {
    showSlideLeft("nav", ".nav-close");
});
$(".nav-close").click(function () {
    hideSlideLeft("nav", ".nav-close");
    $("#nav-bar").addClass("show").removeClass("hide");
});
/*
NAV DROPDOWN ARROW ANIMATION
*/
$('body').on('click', ".dropdown", function () {
    $(".dropchildren").addClass("dropAnimate").removeClass("pullAnimate")
    setTimeout(function () {
        $(".dropchildren").addClass("show").removeClass("hide");
        $(".fa-dropdown").addClass("fa-angle-double-down").removeClass("fa-angle-double-right");
        $(".dropdown").addClass("close-dropdown").removeClass("dropdown");
    }, 200);
})
$('body').on('click', ".close-dropdown", function () {
    $(".dropchildren").addClass("pullAnimate").removeClass("dropAnimate")
    setTimeout(function () {
        $(".dropchildren").removeClass("show").addClass("hide");
        $(".fa-dropdown").removeClass("fa-angle-double-down").addClass("fa-angle-double-right");
        $(".close-dropdown").removeClass("close-dropdown").addClass("dropdown");
    }, 200);
});
/*
TEXT ROTATION LANDING
*/
var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 150 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 1.3;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #7BEDAF }";
    document.body.appendChild(css);
};
var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
if (!touchsupport) { // browser doesn't support touch
    document.documentElement.className += "nottouch"
}
/*
SHOW IMAGE LINKS
*/

// onclick function
// pull the image number
// open the correct image

function showItem(itemNum) {

}
