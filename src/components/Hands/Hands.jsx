import React, {useContext} from 'react'
import { DataContext } from "@context/context"
import piedraImg from '@assets/rock.svg'
import papelImg from '@assets/paper.svg'
import tijeraImg from '@assets/scissors.svg'
import './Hands.css'
import { motion } from 'framer-motion'


const Hands = () => {

  const { svg_user, svg_pc, shake } = useContext(DataContext)
  
    const shakeAnimations = {
      shake_user: 
      {
        scale: 1.1,
        rotate: -30,
        duration: 0.2
      },
      shake_pc: 
      {
        scale: 1.1,
        rotate: 30,
        duration: 0.2
      },
      off: {
          
      }
    }



  return (
    <React.Fragment>
        <div className="game-hands">
            <motion.div
            animate={shake ? "shake_user" : "off"}
            variants={shakeAnimations}
            >
            <img className='user-hand' src={svg_user}/>
            </motion.div>

            <motion.div
            animate={shake ? "shake_pc" : "off"}
            variants={shakeAnimations}
            >
            <img className='pc-hand' src={svg_pc}/>
            </motion.div>
            

        </div>
    </React.Fragment>
  )
}

export { Hands }