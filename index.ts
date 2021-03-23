// Import stylesheets
import "./style.css";
import { showPage } from "./pages";
import { Header } from "./header";

showPage("concept-list");

const title = "PMP Flash Cards";
export const header = new Header(null, null, title);
