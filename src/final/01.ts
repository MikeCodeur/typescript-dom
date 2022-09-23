// Les Types de bases
// http://localhost:3000/alone/final/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {initExo1} from './helper/exerciseHelper'
const divExoName = 'formExoFinal'
initExo1(divExoName)

let form: HTMLFormElement
form = document.getElementById(divExoName) as HTMLFormElement

const button = document.createElement('input')
button.setAttribute('type', 'submit')
button.value = 'envoyer'
form.appendChild(button)

form.reset()

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
