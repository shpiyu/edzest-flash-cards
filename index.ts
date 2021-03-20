// Import stylesheets
import "./style.css";
import { log } from "./utils";
import { getWordCard, wordSetCard } from "./ui-elements";
import { initializeWordMeaning } from "./word-meaning";

const wordSets: string[] = ["Word Set 1", "Word Set 2", "Word Set 3"];
const wordSetPage: HTMLElement = document.getElementById("word-set-section");
const wordMeaningPage: HTMLElement = document.getElementById(
  "word-meaning-section"
);

initializeWordSetContainer();

const word = "Test Word";
const meaning = "Explanation of the word in one or two sentances";



function showWords(setName: string) {
  /*
  1. Load word meaning for the given setName
  2. hide wordSet Page
  3. show word-meaning page
  */
  log(setName);
  wordSetPage.style.display = "none";
  initializeWordMeaning(setName);
}

function initializeWordSetContainer() {
  const wordSetContainer: HTMLElement = document.getElementById(
    "word-sets-container"
  );
  wordSetContainer.innerHTML = "";
  wordSets.forEach(setName => {
    const wordSet = wordSetCard(setName, () => showWords(setName));
    wordSetContainer.appendChild(wordSet);
  });
}

/* initialize words */

// wordCardContainer.appendChild(getWordCard(word));
