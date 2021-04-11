import { wordSetCard } from "./ui-elements";
import { showPage } from "./pages";
import { header } from "./index";
import { getLevels } from "./data/firebase-db";

export class ConceptListContainer {
  appName: string = "PMP Flash Cards";

  constructor() {
    if (header != undefined) header.setHeader(null, null, this.appName);
    getLevels(this.display);
  }

  display(levels: string[]) {
    const wordSetContainer: HTMLElement = document.getElementById(
      "concept-list"
    );
    wordSetContainer.innerHTML = "";
    levels.forEach(conceptName => {
      const wordSet = wordSetCard(conceptName, () =>
        showPage("word-meaning", conceptName)
      );
      wordSetContainer.appendChild(wordSet);
    });
  }
}
