//**1)Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'

const itemsRef = document.querySelectorAll(".item");
let totalCategories = 0;
const itemCategories = itemsRef.forEach((item, index) =>  totalCategories += index);
console.log(`В списке ${totalCategories} категории.`);


//**2)Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li). */

const itemRef = document.querySelectorAll('.item');

itemRef.forEach(elem => 
    console.log(`Категория: ${elem.firstElementChild.textContent}\nКоличество элементов : ${elem.lastElementChild.children.length}`));