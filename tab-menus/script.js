const tabMenusTag = document.querySelector(".tabMenus");
const sliderTag = document.querySelector(".slider");

const tabs = ["home", "services", "about us", "contact us", "login"];

for (let i = 0; i < tabs.length; i++) {
    const liTag = document.createElement("li");
    liTag.addEventListener("click", (event) => {
        const clickedLiTag = event.target;
        const clickedLiTagOffsetLeft = clickedLiTag.offsetLeft;
        const clickedLiTagOffsetWidth = clickedLiTag.offsetWidth;
        sliderTag.style.transform = `translateY(-5px) translateX(${clickedLiTagOffsetLeft}px)`;
        sliderTag.style.width = clickedLiTagOffsetWidth + "px";
    });
    liTag.append(tabs[i].toUpperCase());
    tabMenusTag.append(liTag);
    if (i === 0) {
        sliderTag.style.width = liTag.offsetWidth + "px";
    }
}