var links = document.getElementsByClassName("links"),
    imgs = document.getElementsByTagName("img"),
    i,
    y;
for (i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        for (y = 0; y < imgs.length; y++) {
            if (imgs[y].getAttribute("data-filter") == this.getAttribute("data-filter") || this.getAttribute("data-filter") == "all") {
                imgs[y].style.display = "block";
            }
            else {
                imgs[y].style.display = "none";
            }
        }
    }
}