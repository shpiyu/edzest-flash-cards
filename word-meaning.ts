import { getWordCard, getCongratulationsDiv } from "./ui-elements";
import { SetProgress } from "./set-progress";
import { log } from "./utils";
import { showPage } from "./pages";
import { header } from "./index";

const wordMeaningPage: HTMLElement = document.getElementById(
  "word-meaning-section"
);

// A class representing the word-meaning object
export class WordMeaning {
  word: string;
  meaning: string;
}

export class WordMeaningContainer {
  progress: SetProgress;
  wordMeanings: WordMeaning[];
  wordCardContainer: HTMLElement;

  constructor(concept_name) {
    log(concept_name);
    this.wordMeanings = this.getWordMeanings(concept_name);
    // WARN: Everytime user goes back to main list progress will be lost
    this.progress = new SetProgress(this.wordMeanings);
    this.wordCardContainer = this.initializeCardContainer();
    this.showNextWord();
    header.setHeader(this.getBackButton(), null, concept_name);
  }

  initializeCardContainer(): HTMLElement {
    const cardContainer: HTMLElement = document.createElement("div");
    cardContainer.className += "card-container";

    const wordCardContainer: HTMLElement = document.createElement("div");
    wordCardContainer.className += "word-card-container";
    wordCardContainer.id = "wordCardContainer";
    cardContainer.appendChild(wordCardContainer);

    wordMeaningPage.appendChild(cardContainer);
    log("appended child");

    return wordCardContainer;
  }

  showNextWord() {
    const word = this.progress.getCurrentWord();
    if (word != null) {
      this.displayWord(word);
    } else {
      console.error("No next word");
    }
  }

  displayWord(wordMeaning: WordMeaning) {
    log("coming here");
    this.wordCardContainer.innerHTML = "";
    this.wordCardContainer.appendChild(
      getWordCard(wordMeaning.word, () => this.displayMeaning(wordMeaning))
    );
  }

  displayMeaning(wordMeaning: WordMeaning) {
    this.wordCardContainer.innerHTML = "";
    this.wordCardContainer.style.transform = "rotateY(180deg)";
    this.wordCardContainer.style.msTransform = "rotateY(180deg)";
    this.wordCardContainer.style.WebkitTransform = "rotateY(180de)";
    this.wordCardContainer.appendChild(
      this.getMeaningCard(wordMeaning, this.reinitialize_words)
    );
  }

  reinitialize_words(selected_option: string) {
    this.wordCardContainer.style.transform = "";
    this.wordCardContainer.style.msTransform = "";
    this.wordCardContainer.style.WebkitTransform = "";

    log(selected_option);
    if (selected_option == "yes") {
      this.progress.markWordAsKnown();
    } else {
      this.progress.markWordAsNew();
    }

    if (this.progress.newWordsAvailable()) {
      this.showNextWord();
    } else {
      log("done with this set");
      this.wordCardContainer.innerHTML = "";
      this.wordCardContainer.appendChild(getCongratulationsDiv());
    }
  }

  getWordMeanings(setName: string) {
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

  /* UI component */
  getMeaningCard(wordMeaning: WordMeaning, cb: Function) {
    const wordCardElem: HTMLElement = document.createElement("div");
    wordCardElem.className += "word-card";
    const html = `
                <div class="back">
                  <h2 id="word">${wordMeaning.word}</h2>
                  <p id="meaning">${wordMeaning.meaning}</p>
                  <p id="question">Did you get it right?</p>
                </div>
                `;
    wordCardElem.innerHTML = html;

    const cardHelpElem: HTMLElement = document.createElement("div");
    cardHelpElem.className += "card-help";

    const options = ["yes", "no"];
    options.forEach(option => {
      cardHelpElem.appendChild(this.getButton(option, option, cb));
    });

    wordCardElem.appendChild(cardHelpElem);

    return wordCardElem;
  }

  getButton(btnText: string, id: string, cb: Function): HTMLElement {
    const elem = document.createElement("div");
    elem.className += "button";
    elem.innerHTML = btnText;
    elem.addEventListener("click", () => cb.call(this, id));
    return elem;
  }

  getBackButton(): HTMLElement {
    const elem: HTMLElement = document.createElement("div");
    elem.className += "back-btn";
    elem.innerHTML =
      "<a href='#'> <i class='fa fa-arrow-left' aria-hidden='true'></i> </a>";
    elem.addEventListener("click", () => this.test("concept-list"));
    return elem;
  }

  test(p: string) {
    log("will it work?");
    showPage("concept-list");
  }
}
