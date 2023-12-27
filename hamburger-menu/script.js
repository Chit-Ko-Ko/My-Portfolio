const hamburgerMenuContainerTag = document.querySelector(".hamburgerMenuContainer");
const line1FromMenuTag = document.querySelector(".line1");
const line2FromMenuTag = document.querySelector(".line2");
const line3FromMenuTag = document.querySelector(".line3");
const overlayMenuTag = document.querySelector(".overlayMenu");
const liTags = document.getElementsByTagName("li");

hamburgerMenuContainerTag.addEventListener("click", () => {
    if (hamburgerMenuContainerTag.classList.contains("isOpened")) {
        line2FromMenuTag.classList.remove("disapearLine");
        line1FromMenuTag.classList.remove("rotatePlus45Deg");
        line3FromMenuTag.classList.remove("rotateMinus45Deg");
        overlayMenuTag.classList.remove("showOverlayMenu");
        for (let i = 0; i < liTags.length; i++) {
            liTags[i].classList.remove("moveLiTagUpAndClickable");
        }
        hamburgerMenuContainerTag.classList.remove("isOpened");
    } else {
        line2FromMenuTag.classList.add("disapearLine");
        line1FromMenuTag.classList.add("rotatePlus45Deg");
        line3FromMenuTag.classList.add("rotateMinus45Deg");
        overlayMenuTag.classList.add("showOverlayMenu");
        for (let i = 0; i < liTags.length; i++) {
            liTags[i].classList.add("moveLiTagUpAndClickable");
        }
        hamburgerMenuContainerTag.classList.add("isOpened");
    }
});