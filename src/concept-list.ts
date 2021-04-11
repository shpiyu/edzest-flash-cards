import { wordSetCard } from "./ui-elements";
import { showPage } from "./pages";
import { header } from "./index";

export class ConceptListContainer {
  concepts: string[] = [];
  appName: string = "PMP Flash Cards";

  constructor() {
    if (header != undefined) header.setHeader(null, null, this.appName);
    this.initializeConcepts();
    this.display();
  }

  initializeConcepts() {
    this.concepts = ["Crust", "Mantle", "Core"];
    // todo: get this from db
  }

  display() {
    const wordSetContainer: HTMLElement = document.getElementById(
      "concept-list"
    );
    wordSetContainer.innerHTML = "";
    this.concepts.forEach(conceptName => {
      const wordSet = wordSetCard(conceptName, () =>
        showPage("word-meaning", conceptName)
      );
      wordSetContainer.appendChild(wordSet);
    });
  }
}
