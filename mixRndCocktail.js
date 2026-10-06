import { fetchData } from "./fetchData.js";
import { createPage } from "./createPage.js";

export const mixRndCocktail = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v2/1/random.php";
  const data = await fetchData(url);
  createPage(data);
};
