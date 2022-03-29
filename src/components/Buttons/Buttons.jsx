import React from 'react'
import './Buttons.css'
import piedraImg from '@assets/rock.svg'
import papelImg from '@assets/paper.svg'
import tijeraImg from '@assets/scissors.svg'
import { motion } from 'framer-motion'
import { useStartGame } from '../../hooks/useStartGame'

const Buttons = () => {
    const [start, disable] = useStartGame();
  return (
    <React.Fragment>
        <div className="btn-container">
            <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#C5C7C7' }}
            whileTap={{ scale: 0.9 }}
            disabled={disable} onClick={() => start('piedra')} >
                <img src={piedraImg}/>
            </motion.button>

            <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#C5C7C7' }}
            whileTap={{ scale: 0.9 }}
            disabled={disable} onClick={() => start('papel')}>
                <img src={papelImg}/>
            </motion.button>

            <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#C5C7C7' }}
            whileTap={{ scale: 0.9 }}
            disabled={disable} onClick={() => start('tijera')}>
                <img src={tijeraImg}/>
            </motion.button>
        </div>
    </React.Fragment>
  )
}

export { Buttons }