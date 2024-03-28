const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");

menulist.addEventListener("click", function () {
    menulist.classList.toggle("showlist");
});

const blackbox = document.querySelector(".black-box");
const blanckdiv = document.querySelector(".blanck-div");

blanckdiv.addEventListener("click", function () {
    blackbox.classList.toggle("dot-right");
    blanckdiv.classList.toggle("bg-blue");
})