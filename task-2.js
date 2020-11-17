const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
 
  
  const listRef = document.querySelector('#ingredients')
  const item = document.createElement('li');


ingredients.forEach((value, i, arr) => {
    const item = document.createElement('li'); 
    item.textContent = value;
const finalList = listRef.append(item)
});

console.log(listRef)


