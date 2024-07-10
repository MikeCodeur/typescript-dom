// Les Types de bases
// http://localhost:3000/alone/final/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice

import displayText, { App, initExo1 } from "../lib/exerciseHelper";
const exercice = () => {
const divExoName = 'formExo'
initExo1(divExoName)

// ✔️ Début de l'exercice

// 🐶 Nous allons récuperer le formulaire avec 'getElementById'
// 📝 https://www.w3schools.com/jsref/met_document_getelementbyid.asp
// Comme nous attendons un formulaire, nous voulons typé en 'HTMLFormElement'
let form: HTMLFormElement

// Comme 'getElementById' peut retourner des elements differents (form, button etc ...)
// son type de retour est 'HTMLElement'
// ⛏️ décommente le code ci dessous et utilise le casting pour que la compilation fonctionne
//  form = document.getElementById(divExoName)

// 🐶 Ajoute un bouton 'envoyer' au formulaire
// 🤖 document.createElement('input')
// 🤖 button.setAttribute('type', 'submit')

// 🐶 réinitialise les valeur du form
// 📝 https://developer.mozilla.org/fr/docs/Web/API/HTMLFormElement/reset#:~:text=HTMLFormElement.-,reset(),un%20bouton%20de%20type%20reset%20.
// 🤖 form.reset()

// 🚀 constate ce qu'il se serait passer sur le form.reset si tu avais laisser le type par defaut 'HTMLElement' sur le form
/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;
