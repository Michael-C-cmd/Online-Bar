import { mixRndCocktail } from "./mixRndCocktail.js";
import { bestList, showBestList, hideBestList } from "./BestList.js";
import { searchCocktail } from "./searchCocktail.js";
import { filterCocktail } from "./filterCocktail.js";

const showBestBtn = document.getElementById("showBestBtn");
const hideBestBtn = document.getElementById("hideBestBtn");
const header = document.getElementById("header");
const theList = document.getElementById("theList");
export const output = document.getElementById("output");

const navigate = (path) => {
  path !== "startBtn"
    ? history.pushState(path, "", "#/" + path)
    : history.pushState(path, "", "index.html");

  render(path);
};

const render = async (path) => {
  header.classList.add("hidden");
  if (path === null || path === "startBtn" || path === "") {
    header.classList.remove("hidden");
    output.textContent = "";
    return;
  }

  if (path === "rndBtn") {
    output.textContent = "";
    mixRndCocktail();
  } else if (path === "searchBtn") {
    output.textContent = "";
    if (output.classList.contains("important")) {
      output.classList.remove("important");
    }
    searchCocktail();
  } else if (path === "popularBtn") {
    output.textContent = "";
    filterCocktail();
  } else {
    header.classList.remove("hidden");
    output.textContent = "";
    return;
  }
};

theList.addEventListener("click", (e) => {
  if (
    e.target.id === "rndBtn" ||
    e.target.id === "searchBtn" ||
    e.target.id === "popularBtn" ||
    e.target.id === "startBtn"
  ) {
    navigate(e.target.id);
  }
});

window.addEventListener("popstate", () => {
  const hash = location.hash.slice(2);
  render(hash);
});

showBestBtn.addEventListener("click", () => {
  showBestList();
});

hideBestBtn.addEventListener("click", () => {
  hideBestList();
});

bestList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete--btn")) {
    const stored = JSON.parse(localStorage.getItem("favorite"));
    console.log(e.target.previousSibling.textContent.slice(6));
    const newStored = stored.filter((drink) => {
      return drink.name !== e.target.previousSibling.textContent.slice(6);
    });
    e.target.parentElement.replaceChildren();
    localStorage.setItem("favorite", JSON.stringify(newStored));
  }
});

const initialPath =
  location.hash === "index.html" || location.hash === ""
    ? null
    : location.hash.slice(2);

render(initialPath);
