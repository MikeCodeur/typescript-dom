"use client"
// Les Types de bases
// http://localhost:3000/alone/final/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice

import displayText, { App, initExo2 } from "../lib/exerciseHelper";
const exercice = () => {
const divExoName = 'formExo2'
initExo2(divExoName)

// ✔️ Début de l'exercice

// 🐶 Ajoute une checkbox au formulaire
// La premiere étape est de récuperer le formulaire
const form = document.querySelector('form')

// 🤖 créé un élément input type checkbox
// const cb = ...

// ⛏️ décommente pour ajouter le checkbox au formulaire
//form.appendChild(cb)
// pour eviter le problème de compilation utilise le cast sur 'form'
// ou indique que form ne peut etre null

// 🤖 dans la réalité on préferera utiliser ?. (optionnal chaining plutot que le cast)
// form?.appendChild(cb)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;