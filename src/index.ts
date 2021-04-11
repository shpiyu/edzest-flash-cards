// Import stylesheets
import { showPage } from "./pages";
import { Header } from "./header";
import { firebase } from "@firebase/app";

import "@firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyDZDv6-_qSDm62KDryp3jefSnERThKEFkg",
    authDomain: "flash-card-2ced3.firebaseapp.com",
    databaseURL: "https://flash-card-2ced3-default-rtdb.firebaseio.com",
    projectId: "flash-card-2ced3",
    storageBucket: "flash-card-2ced3.appspot.com",
    messagingSenderId: "286423343220",
    appId: "1:286423343220:web:9da3113fcd045b289c3121"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebase_db = firebase.database();

// getLevels(console.log);
// getConceptsByLevel('Introductory', console.log)

showPage("concept-list");

const title = "PMP Flash Cards";
export const header = new Header(null, null, title);
