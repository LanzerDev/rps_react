import React, {useContext} from 'react'
import { DataContext } from '@context/context'
const useWait = () => {

    const {setTextAnimation, setWinmsg, setPcPoints, setUserPoints, pcPoints, userPoints} = useContext( DataContext )
    const wait = (str) => {
        setTimeout(() => {
            setTextAnimation(true)
            setWinmsg(str)
            str === 'WIN!' ? setUserPoints(userPoints+1) : null
            str === 'LOSE!' ? setPcPoints(pcPoints+1) : null
        }, 1700);
        setTimeout(() => {
            setTextAnimation(false)
        }, 1800);
    }
  return [wait]
}

export { useWait }