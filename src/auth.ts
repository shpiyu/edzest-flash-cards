import "@firebase/auth";
import firebaseui = require("firebaseui")
import { firebase } from "@firebase/app";
import { showPage } from "./pages";

const authPage: HTMLElement = document.getElementById("auth-section");

export class AuthContainer {
    constructor() {
        this.loadUI()
        // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui.auth.AuthUI(firebase.auth());

        var uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            showPage("concept-list");
            return false;
            },
            uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
            }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: '/',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '/',
        // Privacy policy url.
        privacyPolicyUrl: '/'
        };

        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);
    }

    loadUI() {
        const authContainer: HTMLElement = document.createElement('div');
        authContainer.id = "firebaseui-auth-container";

        const loader: HTMLElement = document.createElement('div');
        loader.id = "loader";
        loader.innerHTML = "Loading ... ";
        
        authPage.appendChild(authContainer);
        authPage.appendChild(loader);
    }
}