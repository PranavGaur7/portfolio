const scroller = document.querySelector(".scroll");
const arrowBtns = document.querySelectorAll(".wrapper .arr")
const firstBoxWidth = scroller.querySelector(".box").offsetWidth;
// let isdragging = false,startX,startScrolleft;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        scroller.scrollLeft += btn.id === "right" ? firstBoxWidth : -firstBoxWidth;
    });
});


