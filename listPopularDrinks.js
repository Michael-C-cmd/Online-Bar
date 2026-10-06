import { fetchData } from "./fetchData.js";

export const listPopularDrinks = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v2/1/popular.php";
  const data = await fetchData(url);
  return data;
};
