import React from "react"
import './Header.css'

const Header = () => {
  return (
    <React.Fragment>
      <div className="container">
        <h1>Rock Paper Scissors</h1>
      </div>
        <h2>Click To Play!</h2>
    </React.Fragment>
  )
}

export { Header }