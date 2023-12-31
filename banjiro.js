
const btnLeft = document .querySelector(".left-btn");
const btnRight = document .querySelector(".right-btn");
const menu = document .querySelector(".menu");

const IconVisibility = () => {
    let scrollLeftValue = Math.ceil(menu.scrollLeft);
    // console.log("1.",scrollLeftValue);

    let scrollableWidth = menu.scrollWidth - menu.clientWidth;
    // console.log("2.",scrollableWidth);

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
    btnRight.style.display =  scrollableWidth > scrollLeftValue  ? "block" : "none";
};

btnRight.addEventListener("click", () => {
    menu.scrollLeft += 150;
    // iconVisibility ();
    setTimeout(() => IconVisibility(), 50)
});

btnLeft.addEventListener("click", () => {
    menu.scrollLeft -= 150;
    IconVisibility ();
});