import React, {useContext} from 'react'
import { DataContext } from '@context/context'
import './WinMsg.css'
import { motion } from 'framer-motion'

const WinMessage = () => {

    const { winmsg, userPoints, pcPoints, textAnimation} = useContext(DataContext);

    const winAnimations = {
        winMessage: 
        {
          scale: 1.3,
          duration: 0.3
        },
        off:{

        }
      }
  return (
      <div className="hud">
          <motion.p>{userPoints}</motion.p>


          <motion.p
          animate={textAnimation ? "winMessage" : undefined}
          variants={winAnimations}
          >
          {winmsg}
          </motion.p>


          <motion.p>{pcPoints}</motion.p>
      </div>
  )
}

export { WinMessage }