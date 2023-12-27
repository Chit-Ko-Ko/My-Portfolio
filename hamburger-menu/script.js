const hamburgerMenuContainerTag = document.querySelector(".hamburgerMenuContainer");

const hamburgerLine1Tag = document.querySelector(".line1");
const hamburgerLine2Tag = document.querySelector(".line2");
const hamburgerLine3Tag = document.querySelector(".line3");

const overlayMenuTag = document.querySelector(".overlayMenu");
const liTags = document.getElementsByTagName("li");
const bodyTag = document.getElementsByTagName("body")[0];

hamburgerMenuContainerTag.addEventListener("click", () => {
    if (hamburgerMenuContainerTag.classList.contains("isOpened")) {
        hamburgerLine2Tag.classList.remove("dispearLine");
        hamburgerLine1Tag.classList.remove("rotatePlus45Deg");
        hamburgerLine3Tag.classList.remove("rotateMinus45Deg");
        hamburgerMenuContainerTag.classList.remove("isOpened");
        overlayMenuTag.classList.remove("showOverlayMenu");
        for (let i = 0; i < liTags.length; i++) {
            liTags[i].classList.remove("moveLiTagUp");
        }
    } else {
        overlayMenuTag.classList.add("showOverlayMenu");
        hamburgerLine2Tag.classList.add("dispearLine");
        hamburgerLine1Tag.classList.add("rotatePlus45Deg");
        hamburgerLine3Tag.classList.add("rotateMinus45Deg");
        hamburgerMenuContainerTag.classList.add("isOpened");
        for (let i = 0; i < liTags.length; i++) {
            liTags[i].classList.add("moveLiTagUp");
        }
    }
});