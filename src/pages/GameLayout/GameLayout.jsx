import React from 'react'
import { Hands } from '@components/Hands/Hands'
import { WinMessage } from '@components/WinMsg/WinMessage'


const GameLayout = () => {
  return (
    <React.Fragment>
        <Hands />
        <WinMessage />
    </React.Fragment>
  )
}

export { GameLayout }