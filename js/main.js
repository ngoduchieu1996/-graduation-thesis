var x = document.querySelectorAll(".content-text");
var y = document.querySelectorAll('td');

function appr(a) {
    for (var i = 0; i < x.length; i++) {
        if (i == a) {
            x[a].classList.add("active");
            y[a].classList.add("click");
        } else {
            x[i].classList.remove("active");
            y[i].classList.remove("click");
        }
    }
}

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() >2000) {
            $('.event .number-slide').addClass('number-85');
            $('.event .slide-bar').addClass('bar-85');
            percent(85);
        }
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() >2020) {
            $('.food .number-slide').addClass('number-60');
            $('.food .slide-bar').addClass('bar-60');
            percent(60);
        }
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() >2020) {
            $('.guest .number-slide').addClass('number-75');
            $('.guest .slide-bar').addClass('bar-75');
            percent(75);
        }
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() >2020) {
            $('.finding .number-slide').addClass('number-90');
            $('.finding .slide-bar').addClass('bar-90');
            percent(90);
        }
    });
});


function percent(a) {
    var n = 0;
    var slide = document.querySelector('.event .number-slide');
    var up = setInterval(increase, 30);
    function increase() {
        if (n == a) {
            clearInterval(up);
        } else {
            n++;
            slide.innerHTML = n + "%";
        }
    }
}


