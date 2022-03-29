import React, { useContext, useState } from 'react'
import { DataContext } from '@context/context'
import piedraImg from '@assets/rock.svg'
import { useGames } from './useGames'

const useAnimate = () => {
    const [user_hand, pc_hand, playGame] = useGames();
    const {setShake, setSvg_user, setSvg_pc} = useContext( DataContext )
    const [disable, setDisable] = useState(false)
    const animate = (btn) => {
        playGame(btn)
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
  return [animate, disable]
}

export { useAnimate }