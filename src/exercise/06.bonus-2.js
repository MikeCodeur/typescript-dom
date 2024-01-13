// Basic Forms
// 🚀 another example extra (exercise)
// http://localhost:3000/alone/exercise/06.bonus-2.js
"use client"

import React from "react"

function UsernameForm({ onSubmitUsername }) {
  const usernameInputRef = React.useRef()

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(usernameInputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* 🐶 put EXTRA here */}
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" ref={usernameInputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function Usage() {
  const onSubmitUsername = (username) => console.info("username", username)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default Usage
