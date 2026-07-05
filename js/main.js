import { handleSearch } from "./weatherController.js";

const searchForm = document.querySelector(".searchForm");
const searchInput = document.querySelector("#city-input");

searchForm.addEventListener("submit", (event) => {
  const city = searchInput.value.trim();
  handleSearch(event, city);
});
