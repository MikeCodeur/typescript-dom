"use client"
// Les objets
// 🚀 Imbrication de types
// http://localhost:3000/alone/final/03.bonus-1.js

import displayText, { App, initExo1 } from "../lib/exerciseHelper";
const exercice = () => {
const divExoName = 'formExoFinalBonus1'
initExo1(divExoName)

let form: HTMLFormElement
form = document.getElementById(divExoName) as HTMLFormElement

const button = document.createElement('input')
button.setAttribute('type', 'submit')
button.value = 'envoyer'
form.appendChild(button)

const submitReset = (e: Event) => {
  e.preventDefault()
  form.reset()
}
form.addEventListener('submit', submitReset)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;