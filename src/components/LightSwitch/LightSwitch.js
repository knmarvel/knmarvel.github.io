import clamp from 'lodash-es/clamp'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-with-gesture'
/* https://codesandbox.io/embed/r24mzvo3q */

export default function LightSwitch(props){
    const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
    const bind = useGesture(({ down, delta, velocity }) => {
      velocity = clamp(velocity, 1, 8)
      set({ xy: down ? delta : [0, 0], config: { mass: velocity, tension: 500 * velocity, friction: 50 } })
    })
    return(
        <animated.div className="light-container">
            <div className="light">
                <div className="bead-container">
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                <div className="bead"/>
                </div>
                <div {...bind()} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`) }} className={`handle handle-${props.light}`} onClick={props.toggleLight}/>
            </div>
        </animated.div>
    )
}