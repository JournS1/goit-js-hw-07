const categoriesList = document.querySelector("#categories");

const categoryItems = categoriesList.querySelectorAll(".categories-item");
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((categoryItem) => {
  const categoryTitle =
    categoryItem.querySelector(".categories-title").textContent;
  console.log(`Category: ${categoryTitle}`);

  const namesListItems = categoryItem.querySelectorAll(".names-item");
  console.log(`Elements: ${namesListItems.length}`);
});
