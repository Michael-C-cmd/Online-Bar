const bestList = document.getElementById("bestList");

export const showBestList = () => {
  bestList.classList.remove("hidden");
  bestList.textContent = "";
  const storedArr = JSON.parse(localStorage.getItem("favorite")) || [];
  const h4 = document.createElement("h4");
  h4.textContent = "Meine Lieblingsdrinks:";
  bestList.appendChild(h4);
  storedArr.forEach((drink) => {
    const li = document.createElement("li");
    li.textContent = `Name: ${drink.name}`;
    bestList.appendChild(li);
  });
};

export const hideBestList = () => {
  bestList.classList.add("hidden");
};
