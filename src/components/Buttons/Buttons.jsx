import React, { useContext, useState } from 'react'
import { DataContext } from '@context/context'
import './Buttons.css'
import piedraImg from '@assets/rock.svg'
import papelImg from '@assets/paper.svg'
import tijeraImg from '@assets/scissors.svg'
import { motion } from 'framer-motion'

const Buttons = () => {
    const {setShake, setSvg_user, setSvg_pc, setWinmsg, setAn} = useContext( DataContext )
    const [disable, setDisable] = useState(false)
    const {userPoints, setUserPoints, pcPoints, setPcPoints} = useContext (DataContext)
    let user_hand;
    let pc_hand
    const start = (btn) => {
        let pc_election = Math.floor(Math.random() * 3)
        
        const wait = (str) => {
            setTimeout(() => {
                setAn(true)
                setWinmsg(str)
                str === 'WIN!' ? setUserPoints(userPoints+1) : null
                str === 'LOSE!' ? setPcPoints(pcPoints+1) : null
            }, 1700);
            setTimeout(() => {
                setAn(false)
            }, 1800);
        }

        if (pc_election === 0) {
            pc_hand = piedraImg;
            if (btn === 'piedra') {
                user_hand = piedraImg
                wait('TIED!')
            } else if (btn === 'papel') {
                user_hand = papelImg
                wait('WIN!')
            } else {
                user_hand = tijeraImg
                wait('LOSE!')
            }
        } else if (pc_election === 1) {
            pc_hand = papelImg;
            if (btn === 'piedra') {
                user_hand = piedraImg
                wait('LOSE!')
            } else if (btn === 'papel') {
                user_hand = papelImg
                wait('TIED!')
            } else {
                user_hand = tijeraImg
                wait('WIN!') 
            }
        } else if (pc_election === 2) {
            pc_hand = tijeraImg;
            if (btn === 'piedra') {
                user_hand = piedraImg
                wait('WIN!')
            } else if (btn === 'papel') {
                user_hand = papelImg
                wait('LOSE!')
            } else {
                user_hand = tijeraImg
                wait('TIED!')
            }
        }

        const animate = () => {
            let i=5;
            setShake(s => !s)
            setDisable(true);
            setSvg_user(piedraImg)
            setSvg_pc(piedraImg)
           const timing = setInterval(() => {
                i--;
                setShake(s => !s)
                if (i == 0){
                    setSvg_user(user_hand)
                    setSvg_pc(pc_hand)
                    setDisable(false);

                    clearInterval(timing)
                }
            }, 300);
        }
        animate()
    }

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