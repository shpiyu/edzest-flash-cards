import {
  getWordCard,
  getMeaningCard,
  getCongratulationsDiv
} from "./ui-elements";
import { SetProgress } from "./set-progress";
import { log } from "./utils";

const wordCardContainer: HTMLElement = document.getElementById(
  "word-card-container"
);

// global variable - DANGER
var setProgress: SetProgress;

// A class representing the word-meaning object
export class WordMeaning {
  word: string;
  meaning: string;
}

export function initializeWordMeaning(setName: string) {
  /**
   * Download word meaning and store in a list
   * maintain a separate list that'll store words to be displayed
   * load a card view for the first word from the above list
   *
   */
  const wordMeanings = getWordMeanings(setName);
  setProgress = new SetProgress(wordMeanings);
  showNextWord();
}

function showNextWord() {
  const word = setProgress.getCurrentWord();
  if (word != null) {
    displayWord(word);
  } else {
    console.error("No next word");
  }
}

function displayWord(wordMeaning: WordMeaning) {
  wordCardContainer.innerHTML = "";
  wordCardContainer.appendChild(
    getWordCard(wordMeaning.word, () => displayMeaning(wordMeaning))
  );
}

function displayMeaning(wordMeaning: WordMeaning) {
  wordCardContainer.innerHTML = "";
  wordCardContainer.appendChild(
    getMeaningCard(wordMeaning, reinitialize_words)
  );
}

function reinitialize_words(selected_option: string) {
  log(selected_option);
  if (selected_option == "yes") {
    setProgress.markWordAsKnown();
  } else {
    setProgress.markWordAsNew();
  }

  if (setProgress.newWordsAvailable()) {
    showNextWord();
  } else {
    log("done with this set");
    wordCardContainer.innerHTML = "";
    wordCardContainer.appendChild(getCongratulationsDiv());
  }
}

function getWordMeanings(setName: string) {
  /**
   * Get word meanings for the given set from DB
   */

  // todo: fetch real data from firebase

  const mockWordMeanings: WordMeaning[] = [
    {
      word: "Project",
      meaning:
        "A Project is a Temporary edeavour to produce a product, a service, or a result."
    },
    {
      word: "Project Manager",
      meaning:
        "A person assigned by the performing organization to lead the team responsible for achieving the project objectives."
    },
    {
      word: "Portfolio Management",
      meaning:
        "Management of a group of programs and/or programs together to achieve an organizational strategies and policies."
    },
    {
      word: "Phase Gates",
      meaning:
        "A control point at which a project charter and business documents are re-examined based on current environment to determine if the project should be changed, terminated, or continued as planned."
    },
    {
      word: "Business Case",
      meaning:
        "A documented economic feasibility study used to establish the validity of the benefits selected and used as a basis for authorization of further project management activities"
    }
  ];

  return mockWordMeanings;
}

/**
 * TODO:
 * 1. On word tap - show its meaning
 * 2. On button tap - re-initialize words to show and show next Word
 * 3. Show a back button, that'll take user back to word list
 */
