import React from "react"
import { ButtonsLayout } from "./pages/ButtonsLayout/ButtonsLayout"
import { GameLayout } from "./pages/GameLayout/GameLayout"
import { DataProvider } from "@context/context"

const App = () => {
  return (
    <DataProvider>
      <React.Fragment>
          <ButtonsLayout/>
          <GameLayout />
      </React.Fragment>
    </DataProvider>
  )
}

export default App
