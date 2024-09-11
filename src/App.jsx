import React from "react"
import { ButtonsLayout } from "./pages/ButtonsLayout/ButtonsLayout"
import { GameLayout } from "./pages/GameLayout/GameLayout"
import { DataProvider } from "@context/context"
import "./css/index.css"

const App = () => {
  return (
    <DataProvider>
      <React.Fragment>
        <div className="container">
          <ButtonsLayout />
          <GameLayout />
        </div>
      </React.Fragment>
    </DataProvider>
  )
}

export default App
