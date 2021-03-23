import { log } from "./utils";
import { WordMeaning } from "./word-meaning";

export function wordSetCard(title: string, cb: Function): HTMLElement {
  const setCardDiv: HTMLElement = document.createElement("div");
  const content = `<div class='set-card'>
                    <h3>${title}</h3>
                  </div>`;
  setCardDiv.innerHTML = content;
  setCardDiv.addEventListener("click", cb);
  return setCardDiv;
}

export function getWordCard(word: string, cb: Function): HTMLElement {
  const elem: HTMLElement = document.createElement("div");
  const html = `            
    <div class="word-card front">
      <h2 id="word">${word}</h2>
        
          <p>Tap to see meaning of the word</p>
        
    </div>`;
  elem.innerHTML = html;
  elem.addEventListener("click", cb);
  return elem;
}

export function getCongratulationsDiv(): HTMLElement {
  const elem: HTMLElement = document.createElement("div");
  const html = `
          <div>
          <b> Congratulations! </b> You've learnt all words from this set </p>
      `;
  elem.innerHTML = html;
  return elem;
}
