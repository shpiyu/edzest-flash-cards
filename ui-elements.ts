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
        <div class="card-help">
          <p>Tap to see meaning of the word</p>
        </div>
    </div>`;
  elem.innerHTML = html;
  elem.addEventListener("click", cb);
  return elem;
}

// export function getMeaningCard(wordMeaning: WordMeaning, cb: Function) {
//   const wordCardElem: HTMLElement = document.createElement("div");
//   wordCardElem.className += "word-card";
//   const html = `
//               <div class="back">
//                 <h2 id="word">${wordMeaning.word}</h2>
//                 <p id="meaning">${wordMeaning.meaning}</p>
//                 <p id="question">Did you get it right?</p>
//               </div>
//               `;
//   wordCardElem.innerHTML = html;

//   const cardHelpElem: HTMLElement = document.createElement("div");
//   cardHelpElem.className += "card-help";

//   const options = ["yes", "no"];
//   options.forEach(option => {
//     cardHelpElem.appendChild(getButton(option, option, cb));
//   });

//   wordCardElem.appendChild(cardHelpElem);

//   return wordCardElem;
// }

export function getCongratulationsDiv(): HTMLElement {
  const elem: HTMLElement = document.createElement("div");
  const html = `
          <div>
          <b> Congratulations! </b> You've learnt all words from this set </p>
      `;
  elem.innerHTML = html;
  return elem;
}

// function getButton(btnText: string, id: string, cb: Function): HTMLElement {
//   const elem = document.createElement("div");
//   elem.className += "button";
//   elem.innerHTML = btnText;
//   elem.addEventListener("click", () => cb(id));
//   return elem;
// }
