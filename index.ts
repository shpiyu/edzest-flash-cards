// Import stylesheets
import "./style.css";
import { log } from "./utils";
import { getWordCard, wordSetCard } from "./ui-elements";
import { initializeWordMeaning, WordMeaningContainer } from "./word-meaning";
import { ConceptListContainer } from "./concept-list";
import { showPage } from "./pages";

// const wordSets: string[] = ["Crust", "Mantle", "Core"];
const conceptListPage: HTMLElement = document.getElementById("concept-list");
const wordMeaningPage: HTMLElement = document.getElementById(
  "word-meaning-section"
);

showPage("concept-list");

// const backButton: HTMLElement = document.getElementById("back");

// initializeWordSetContainer();

function showWords(setName: string) {
  /*
  1. Load word meaning for the given setName
  2. hide wordSet Page
  3. show word-meaning page
  */
  log(setName);
  conceptListPage.style.display = "none";
  wordMeaningPage.style.display = "block";
  initializeWordMeaning(setName);
}

// backButton.addEventListener("click", () => showWordSetsPage());

function showWordSetsPage() {
  conceptListPage.style.display = "block";
  wordMeaningPage.style.display = "none";
}

// function initializeWordSetContainer() {
//   wordMeaningPage.style.display = "none";
//   const wordSetContainer: HTMLElement = document.getElementById(
//     "word-sets-container"
//   );
//   wordSetContainer.innerHTML = "";
//   wordSets.forEach(setName => {
//     const wordSet = wordSetCard(setName, () => showWords(setName));
//     wordSetContainer.appendChild(wordSet);
//   });
// }

/* initialize words */

// wordCardContainer.appendChild(getWordCard(word));
