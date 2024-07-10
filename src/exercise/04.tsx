// Les Types de bases
// http://localhost:3000/alone/final/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, initExo4 } from "../lib/exerciseHelper";
const exercice = () => {
const divExoName = 'formExoFinal4'
initExo4(divExoName)

// ✔️ Début de l'exercice
// div principale de l'exercice
const exoDiv = document.getElementById('exo')

// 🐶 récupurère le formulaire dans une `const form`
// 🤖 clone 'form' dans `const formClone` avec la fonction cloneNode
// 📝 https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode
// attention au param `deep`

// ⛏️  Décommente les ligne suivantes pour créer un label
// const labelTs = document.createElement('label')
// labelTs.innerText = 'TYPESCRIPT'
// labelTs.setAttribute('for', 'js')

// ⛏️  Décommente les ligne suivantes pour créer un radio
// const radioTs = document.createElement('input')
// radioTs.setAttribute('type', 'radio')
// radioTs.setAttribute('id', 'ts')
// radioTs.setAttribute('value', 'TYPESCRIPT')
// radioTs.setAttribute('name', 'language')

// 🐶 Nous souhaitons ajouter 'radioTs' et 'labelTs' en premiere position
// pour cela nous allons utliser la fonction "insertBefore"
// 📝 https://www.w3schools.com/jsref/met_node_insertbefore.asp
// pour fonctionner "insertBefore" à besoin d'un element de reference pour inserer avant ce dernier
// nous allons donc avoir besoin de recuperer tous les input de "formClone"
// 🐶 récupère tous les champs input dans `const inputs`

// 🐶 ajoute radioTs dans formClone en premier grace à insertBefore
// 🐶 ajoute labelTs dans formClone en ensuite grace à insertBefore
// Note : Es tu sur que 'formClone' est bien casté pour pouvoir utiliser 'insertBefore' ?

//🐶 Ajoute formClone dans exiDiv

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;