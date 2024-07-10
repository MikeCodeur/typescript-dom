// Les Types de bases
// http://localhost:3000/alone/final/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, initExo4 } from "../lib/exerciseHelper";
const exercice = () => {
const divExoName = 'formExoFinal4'
initExo4(divExoName)

//Div général de l'exercice
const exoDiv = document.getElementById('exo')
const form = document.querySelector('form') as HTMLFormElement
const formClone = form.cloneNode(true) as HTMLFormElement

//Création du label TypeScript
const labelTs = document.createElement('label')
labelTs.innerText = 'TYPESCRIPT'
labelTs.setAttribute('for', 'js')

//Création du radio button TS avec tous les attributs
const radioTs = document.createElement('input')
radioTs.setAttribute('type', 'radio')
radioTs.setAttribute('id', 'ts')
radioTs.setAttribute('value', 'TYPESCRIPT')
radioTs.setAttribute('name', 'language')

//récuperation de tous les input sur le clone
const inputs = formClone.querySelectorAll('input')

//ajout en premier element
formClone.insertBefore(radioTs, inputs?.[0])
formClone.insertBefore(labelTs, inputs?.[0])

//Ajout du formulaire cloner dans la div de l'exo
exoDiv?.appendChild(formClone)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;