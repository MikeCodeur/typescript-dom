// Styling
/*

*/

import React from 'react'

type Personne = {
  age: number
  name: string
}
const p: Personne = {age: 21, name: 'mike'}

const smallBox = <div>small box {p.name}</div>
const mediumBox = <div>medium box</div>
const largeBox = <div>large box</div>

function Box() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default Box

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
