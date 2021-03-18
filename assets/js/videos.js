const videosList = document.querySelector(".videos-list");
const videosIframe = document.querySelector(".videos-iframe");

videosList.addEventListener("click", showVideo);

function showVideo(e) {
    const item = e.target;
    if (item.classList[0] === "cocina") {
        videosIframe.innerHTML =
            '<iframe class="mx-auto youtube-video" src="https://www.youtube.com/embed/ttWXapXj4cg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }
    if (item.classList[0] === "aromas") {
        videosIframe.innerHTML =
            '<iframe class="mx-auto youtube-video" src="https://www.youtube.com/embed/hbDGOenUBWA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }
    if (item.classList[0] === "tasting") {
        videosIframe.innerHTML =
            '<iframe class="mx-auto youtube-video" src="https://www.youtube.com/embed/TgqeRTwZvIo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }
}

var object = document.getElementById("element"),
    initX,
    initY,
    firstX,
    firstY;

object.addEventListener(
    "mousedown",
    function (e) {
        e.preventDefault();
        initX = this.offsetLeft;
        initY = this.offsetTop;
        firstX = e.pageX;
        firstY = e.pageY;

        this.addEventListener("mousemove", dragIt, false);

        window.addEventListener(
            "mouseup",
            function () {
                object.removeEventListener("mousemove", dragIt, false);
            },
            false
        );
    },
    false
);

object.addEventListener(
    "touchstart",
    function (e) {
        e.preventDefault();
        initX = this.offsetLeft;
        initY = this.offsetTop;
        var touch = e.touches;
        firstX = touch[0].pageX;
        firstY = touch[0].pageY;

        this.addEventListener("touchmove", swipeIt, false);

        window.addEventListener(
            "touchend",
            function (e) {
                e.preventDefault();
                object.removeEventListener("touchmove", swipeIt, false);
            },
            false
        );
    },
    false
);

function dragIt(e) {
    this.style.left = initX + e.pageX - firstX + "px";
    this.style.top = initY + e.pageY - firstY + "px";
}

function swipeIt(e) {
    var contact = e.touches;
    this.style.left = initX + contact[0].pageX - firstX + "px";
    this.style.top = initY + contact[0].pageY - firstY + "px";
}
