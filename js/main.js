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
    $(window).one('scroll',function () {
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
    var event = document.querySelector('.event .number-slide');
    var food = document.querySelector('.food .number-slide');
    var guest = document.querySelector('.guest .number-slide');
    var finding = document.querySelector('.finding .number-slide');
    var up = setInterval(increase(a), 30);

    switch (a) {
        case 85:
            function increase(a) {
                if (n == a) {
                    clearInterval(up);
                } else {
                    n++;
                    event.innerHTML = n + "%";
                }
            }
            break;

        case 60:
            function increase(a) {
                if (n == a) {
                    clearInterval(up);
                } else {
                    n++;
                    food.innerHTML = n + "%";
                }
            }
            break;

        case 75:
            function increase(a) {
                if (n == a) {
                    clearInterval(up);
                } else {
                    n++;
                    guest.innerHTML = n + "%";
                }
            }
            break;

        case 90:
            function increase(a) {
                if (n == a) {
                    clearInterval(up);
                } else {
                    n++;
                    finding.innerHTML = n + "%";
                }
            }
            break;
    
        default:
            break;
    }
}


