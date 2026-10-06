import { fetchData } from "./fetchData.js";
import { output } from "./app.js";
import { createPage } from "./createPage.js";
import { listPopularDrinks } from "./listPopularDrinks.js";

export const filterCocktail = async () => {
  const data = await listPopularDrinks();
  if (data.data === null) {
  }
  const select = document.createElement("select");
  const showBtn = document.createElement("button");
  showBtn.textContent = "Anzeigen";
  showBtn.classList.add("main--btn");
  data.data.drinks.forEach((drink) => {
    const option = document.createElement("option");
    option.value = drink.strDrink;
    option.textContent = drink.strDrink;
    select.appendChild(option);
  });
  output.append(select, showBtn);

  showBtn.addEventListener("click", async () => {
    output.textContent = "";

    const drinkName = select.value;
    const drinkUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`;
    const data = await fetchData(drinkUrl);
    createPage(data);
  });
};
