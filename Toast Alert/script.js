const btnTag = document.querySelector(".btn");
const parentTag = document.querySelector(".parent");

btnTag.addEventListener("click", () => {
    parentTag.innerHTML = "";
    const toastAlertDiv = document.createElement("div");
    toastAlertDiv.classList.add("toastAlert", "bg-info");
    toastAlertDiv.append("Your file was successfully upload.");
    parentTag.append(toastAlertDiv);
    toastAlertDiv.style.bottom = `-${toastAlertDiv.offsetHeight}px`;
    setTimeout(() => {
        toastAlertDiv.style.bottom = `10px`;
    }, 100)
    setTimeout(() => {
        toastAlertDiv.style.bottom = `-${toastAlertDiv.offsetHeight}px`;
    }, 3000);
});