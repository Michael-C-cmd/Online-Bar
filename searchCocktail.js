import { fetchData } from "./fetchData.js";
import { output } from "./app.js";
import { createPage } from "./createPage.js";

export const searchCocktail = async () => {
  const label = document.createElement("label");
  const searchIn = document.createElement("input");
  const startSearchBtn = document.createElement("button");
  label.htmlFor = "searchIn";
  label.textContent = "Lieblingsgetränk suchen: ";
  searchIn.type = "text";
  searchIn.id = "searchIn";
  startSearchBtn.id = "startSearchBtn";
  startSearchBtn.classList.add("main--btn");
  startSearchBtn.textContent = "Suchen";

  output.append(label, searchIn, startSearchBtn);

  let drinkName = null;

  startSearchBtn.addEventListener("click", async () => {
    output.textContent = "";

    const message = document.createElement("p");

    if (searchIn.value === null || searchIn.value.trimStart() === "") {
      output.append(message);

      message.textContent = "Bitte Cocktailname ausfüllen";
      message.classList.add("important");
    } else {
      drinkName = searchIn.value;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`;
      const data = await fetchData(url);

      createPage(data);
    }
  });
};
