var links1 = document.getElementsByClassName("nav-item"),
    divs = document.getElementsByClassName("containers"),
    i,
    x,
    y;
for (i = 0; i < links1.length; i++) {
    links1[i].onclick = function () {
        for (x = 0; x < links1.length; x++) {
            links1[x].classList.remove("active1")
        }
        this.classList.add("active1");
    }
}
window.onscroll = function () {
    for (y = 0; y < divs.length; y++) {
        if (scrollY > divs[y].offsetTop && scrollY < (divs[y].offsetTop + divs[y].offsetHeight)) {
            links1[y].classList.add("active1");
        }
        else {
            links1[y].classList.remove("active1");
        }
    }
}