import React from 'react'
import piedraImg from '@assets/rock.svg'
import papelImg from '@assets/paper.svg'
import tijeraImg from '@assets/scissors.svg'
import { useWait } from './useWait';
const useGames = () => {
    const [wait] = useWait();
    let user_hand;
    let pc_hand;
    const user = () =>{
        return user_hand
    }
    const pc = () =>{
        return pc_hand 
    }
    const playGame = (btn) => {
        let pc_election = Math.floor(Math.random() * 3)
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
    }
    
  return [user, pc, playGame]
}

export { useGames }