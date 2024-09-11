import React from 'react'
import { Hands } from '@components/Hands/Hands'
import { WinMessage } from '@components/WinMsg/WinMessage'
import './GameLayout.css'

const GameLayout = () => {
  return (
    <React.Fragment>
      <Hands />
      <div className="user-pc">
        <h4>USER</h4>
        <h4>PC</h4>
      </div>
      <WinMessage />
    </React.Fragment>
  )
}

export { GameLayout }