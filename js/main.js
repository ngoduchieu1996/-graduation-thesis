var x = document.querySelectorAll(".content-text");

function appr(a) {
    for (var i = 0; i < x.length; i++) {
        if (i = a) {
            x[a].classList.add("active");
        } else {
            x[i].classList.remove("active"," ");
        }
    }
}