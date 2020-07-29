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
            event();
        }

        function event() {
            var n = 0;
            var event = document.getElementById("event");
            var up = setInterval(increase, 25);
            function increase() {
              if (n == 85) {
                clearInterval(up);
              } else {
                n++;
                event.innerHTML = n + "%";
              }
            }
          }

        if ($(document).scrollTop() >2020) {
            $('.food .number-slide').addClass('number-60');
            $('.food .slide-bar').addClass('bar-60');
            food();
        }

        function food() {
            var n = 0;
            var event = document.getElementById("food");
            var up = setInterval(increase, 25);
            function increase() {
              if (n == 60) {
                clearInterval(up);
              } else {
                n++;
                event.innerHTML = n + "%";
              }
            }
          }

        if ($(document).scrollTop() >2040) {
            $('.guest .number-slide').addClass('number-75');
            $('.guest .slide-bar').addClass('bar-75');
            guest();

            function guest() {
                var n = 0;
                var event = document.getElementById("guest");
                var up = setInterval(increase, 25);
                function increase() {
                  if (n == 75) {
                    clearInterval(up);
                  } else {
                    n++;
                    event.innerHTML = n + "%";
                  }
                }
              }
        }

        if ($(document).scrollTop() >2060) {
            $('.finding .number-slide').addClass('number-90');
            $('.finding .slide-bar').addClass('bar-90');
            finding();
        }

        function finding() {
            var n = 0;
            var event = document.getElementById("finding");
            var up = setInterval(increase, 25);
            function increase() {
              if (n == 90) {
                clearInterval(up);
              } else {
                n++;
                event.innerHTML = n + "%";
              }
            }
          }
    });
});
