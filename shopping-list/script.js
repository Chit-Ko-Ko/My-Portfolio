const inputTag = document.getElementsByClassName("form-control")[0];
const shoppingListTag = document.getElementsByClassName("shoppingListContainer")[0];

let productId = 0;
inputTag.addEventListener("change", event => {
    productId += 1;
    const inputValue = event.target.value;
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("productName");
    parentDiv.addEventListener("click", () => {
        const classExist = parentDiv.classList.contains("lineThrough");
        if (classExist) {
            parentDiv.classList.remove("lineThrough");
        } else {
            parentDiv.classList.add("lineThrough");
        }
    });
    const productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash");
    trashIcon.addEventListener("click", () => {
        trashIcon.parentElement.remove();
    })
    const spanTag = document.createElement("span");
    const productNo = productId.toString();
    spanTag.append(productNo + ". " + inputValue);
    parentDiv.append(spanTag);
    productContainer.append(parentDiv, trashIcon);
    shoppingListTag.append(productContainer);
    inputTag.value = "";
});

