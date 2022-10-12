
let bgContainerEl = document.createElement("div");
bgContainerEl.classList.add("bg-container"); 
document.body.appendChild(bgContainerEl);

let headingElement = document.createElement("h1");
headingElement.classList.add("heading");
headingElement.textContent = "Grocery List";
bgContainerEl.appendChild(headingElement);

let orderlistContainer = document.createElement("ol");
orderlistContainer.classList.add("list-container");
bgContainerEl.appendChild(orderlistContainer);

let groceryItems = [
    "Milk", "peanut Butter", "choco Chips", "Tomato Sauce",
    "Noodles"," Cup Cakes"
]; 

for (let groceryItem of groceryItems){
let listItemElement = document.createElement("li");
listItemElement.textContent = groceryItem;
orderlistContainer.appendChild(listItemElement);
}

let checkboxEl = document.createElement("input");
checkboxEl.type = "checkbox";
checkboxEl.id = "deliveryMode";
bgContainerEl.appendChild(checkboxEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for","deliveryMode");
labelEl.classList.add("delivery-text");
labelEl.textContent = ("Need Home Delivery");
bgContainerEl.appendChild(labelEl);

let brEl = document.createElement("br");
bgContainerEl.appendChild(brEl);

let buttonEl = document.createElement("button");
buttonEl.classList.add("btn", "btn-primary");
buttonEl.textContent = "Proceed To Pay";
bgContainerEl.appendChild(buttonEl);