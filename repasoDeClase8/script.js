const $ = (selector) => document.getElementById(selector);

let shoppingList = [];

const addItem = () => {
    let newItem = $("newItemInput").value.toUpperCase();
    shoppingList.push(newItem);
    createList(shoppingList);
    $("listForm").reset();
}

$("newItemInput").addEventListener("keydown", function (event) {
    if (event.keyCode === 13 || event.key === "Enter") {
        addItem();
    }
});

const createList = (lista) => {
    $("list").innerHTML = "";
    lista.forEach((item, index) => {
        let liContent = document.createTextNode(`${item}`);
        let liItem = document.createElement("li");
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "🚫";
        deleteBtn.addEventListener(`click`, () => deleteItem(index));
        let updateBtn = document.createElement("button");
        updateBtn.classList.add("btn");
        updateBtn.innerText = "⚊";
        updateBtn.addEventListener(`click`, () => updateItem(index));
        liItem.classList.add("list-item");
        liItem.appendChild(liContent);
        liItem.appendChild(updateBtn);
        liItem.appendChild(deleteBtn);
        $("list").appendChild(liItem);
    });
}

const deleteItem = (itemIndex) => {
    shoppingList.splice(itemIndex, 1);
    createList(shoppingList);
}

const updateItem = (itemIndex) => {
    let newValue = prompt("Cambio").toUpperCase();
    shoppingList[itemIndex] = newValue;
    createList(shoppingList);
}

$("addButton").addEventListener(`click`, addItem);

const changeMode = () => {
    if ($("body").getAttribute("data-theme") === "light") {
        $("body").setAttribute("data-theme", "dark")
        $("modeBtn").innerText = "🌕";
    } else {
        $("body").setAttribute("data-theme", "light")
        $("modeBtn").innerText = "🌑";
    }
}

$("modeBtn").addEventListener(`click`, changeMode);
