
import { useAnimate } from './minihooks/useAnimate'

const useStartGame = () => {
    const [animate, disable] = useAnimate()
    const start = (btn) => {
        animate(btn)
    }
    return [ start, disable ]
}

export { useStartGame }