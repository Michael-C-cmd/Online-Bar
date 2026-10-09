import { output } from "./app.js";
import { bestList, showBestList } from "./BestList.js";

export const createPage = (data) => {
  const cName = document.createElement("h3");
  const likeBtn = document.createElement("button");
  const alco = document.createElement("p");
  const ingredientsList = document.createElement("ul");

  if (data.error !== null) {
    output.textContent = data.error;
    output.classList.add("important");
    return;
  } else if (data.data.drinks === null) {
    output.textContent =
      "Dein Drink wurde in unserer Datenbank nicht gefunden. Probiere es noch einmal.";
    output.classList.add("important");
    return;
  }
  cName.textContent = "Name: " + data.data.drinks[0].strDrink;
  likeBtn.textContent = "⭐️";
  likeBtn.classList.add("main--btn");
  likeBtn.id = "likeBtn";
  if (data.data.drinks[0].strAlcoholic === "Alcoholic") {
    alco.textContent = "Alcoholic?: YEAH";
  } else if (data.data.drinks[0].strAlcoholic === "Non alcoholic") {
    alco.textContent = "Alcoholic?: NOPE";
  } else {
    alco.textContent = "Alcoholic?: " + data.data.drinks[0].strAlcoholic;
  }
  ingredientsList.textContent = "Zutatenliste:";

  let ingredientsArr = [];

  for (let key in data.data.drinks[0]) {
    if (key.startsWith("strIngredient") && data.data.drinks[0][key] !== null) {
      const li = document.createElement("li");
      li.textContent = data.data.drinks[0][key];
      ingredientsList.appendChild(li);
      ingredientsArr = [...ingredientsArr, data.data.drinks[0][key]];
    }
  }
  output.append(cName, likeBtn, alco, ingredientsList);

  likeBtn.addEventListener("click", () => {
    const drink = {
      name: data.data.drinks[0].strDrink,
      alcoholic: data.data.drinks[0].strAlcoholic,
      ingredients: ingredientsArr,
    };
    let stored;
    if (JSON.parse(localStorage.getItem("favorite")) === null) {
      stored = [];
    } else {
      stored = JSON.parse(localStorage.getItem("favorite"));
    }

    if (
      !stored.some((storedDrink) => {
        return storedDrink.name === drink.name;
      })
    ) {
      const storedArr = [...stored, drink];
      localStorage.setItem("favorite", JSON.stringify(storedArr));
    }

    if (!bestList.classList.contains("hidden")) {
      showBestList();
    }
  });
};
