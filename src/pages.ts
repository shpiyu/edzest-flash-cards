import { ConceptListContainer } from "./concept-list";
import { WordMeaningContainer } from "./word-meaning";
import { AuthContainer } from "./auth"; 

interface Page {
  id: string;
  container: any;
  element: HTMLElement;
}

const conceptListPage: HTMLElement = document.getElementById("concept-list");
const wordMeaningPage: HTMLElement = document.getElementById(
  "word-meaning-section"
);
const authPage: HTMLElement = document.getElementById("auth-section");

const pages: Page[] = [
  {
    id: "concept-list",
    element: conceptListPage,
    container: ConceptListContainer
  },
  {
    id: "word-meaning",
    element: wordMeaningPage,
    container: WordMeaningContainer
  },
  {
    id: "auth",
    element: authPage,
    container: AuthContainer
  }
];

export function showPage(page_id: string, ...page_params: any[]) {
  pages.forEach(page => (page.element.innerHTML = ""));
  const currentPage: Page = pages.find(page => page.id == page_id);
  const currentPageContainer = new currentPage.container(...page_params);
}
