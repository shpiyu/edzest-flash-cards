import { log } from "./utils";
import { wordSetCard } from "./ui-elements";
import { showPage } from "./pages";

export class ConceptListContainer {
  concepts: string[] = [];

  constructor() {
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
