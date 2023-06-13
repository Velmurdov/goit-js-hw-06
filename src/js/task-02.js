const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient ; 
  itemEl.classList.add("item");
  listEl.append(itemEl);
})