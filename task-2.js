const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listRef = document.querySelector("#ingredients");
const listIngredientsById = document.getElementById("ingredients");

const createItem = (item) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = item;
  return itemRef;
};

const itemCard = ingredients.map((item) => createItem(item));
listRef.append(...itemCard);
console.log(listRef);
