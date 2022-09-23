// Les Types de bases
// http://localhost:3000/alone/final/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {initExo2} from './helper/exerciseHelper'
const divExoName = 'formExoFinal3'
initExo2(divExoName)

const inputs = document.querySelectorAll('input')

inputs.forEach(el => {
  const type = el.getAttribute('type')
  if (type === 'text') el.setAttribute('type', 'color')
})

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
