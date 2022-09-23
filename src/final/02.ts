// Les Types de bases
// http://localhost:3000/alone/final/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {initExo2} from './helper/exerciseHelper'
const divExoName = 'formExoFinal2'
initExo2(divExoName)

const form = document.querySelector('form') as HTMLFormElement

const cb = document.createElement('input')
cb.setAttribute('type', 'checkbox')
form.appendChild(cb)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
