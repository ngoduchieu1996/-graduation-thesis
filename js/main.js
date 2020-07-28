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
        if ($(document).scrollTop() >2200) {
            $('.event .number-slide').addClass('number-85');
            $('.event .slide-bar').addClass('bar-85');
        }
    });
});