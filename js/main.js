const searchInput = document.querySelector("input");

const searchButton = document.querySelector("button");

searchButton.addEventListener("click", () => {
  const ville = searchInput.value;
  console.log(ville);
  console.log("Recherche activer");
});
