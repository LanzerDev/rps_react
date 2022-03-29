import React, { createContext, useState } from 'react'
import piedraImg from '@assets/rock.svg'


export const DataContext = createContext();

export const DataProvider = ({ children }) =>{

    const [shake, setShake] = useState(false)
    const [svg_user, setSvg_user] = useState(piedraImg)
    const [svg_pc, setSvg_pc] = useState(piedraImg)
    const [winmsg, setWinmsg] = useState('Good Luck!')
    const [userPoints, setUserPoints] = useState(0)
    const [pcPoints, setPcPoints] = useState(0)
    const [textAnimation, setTextAnimation] = useState(false)
    return (
        <DataContext.Provider value={{
            shake,
            setShake,
            svg_user,
            svg_pc,
            setSvg_user,
            setSvg_pc,
            winmsg,
            setWinmsg,
            userPoints,
            setUserPoints,
            pcPoints,
            setPcPoints,
            textAnimation,
            setTextAnimation,
        }}>
            { children }
        </DataContext.Provider>
    )
}
