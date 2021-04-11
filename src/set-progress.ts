import { WordMeaning } from "./word-meaning";

export class SetProgress {
  wordMeanings: WordMeaning[];
  wordMeaningsToShow: WordMeaning[] = [];

  constructor(wordMeanings: WordMeaning[]) {
    // remove holes from the array sent by firebase
    wordMeanings = this.removeHoles(wordMeanings)
    this.wordMeanings = wordMeanings;
    // todo: for logged in users take this value from their profile
    this.wordMeaningsToShow = wordMeanings;
  }

  markWordAsKnown() {
    // remove the first word
    this.wordMeaningsToShow.shift();
  }

  markWordAsNew() {
    // push the word at the end of the list
    this.wordMeaningsToShow.push(this.wordMeanings.shift());
  }

  getCurrentWord() {
    if (this.wordMeaningsToShow.length > 0) {
      return this.wordMeaningsToShow[0];
    } else {
      console.error("Attempt to read empty word meaning list");
      return null;
    }
  }

  removeHoles(wordMeanings: WordMeaning[]) {
    return wordMeanings.filter(wordMeaning => wordMeaning != undefined)
  }

  newWordsAvailable(): boolean {
    return this.wordMeaningsToShow.length != 0;
  }
}
