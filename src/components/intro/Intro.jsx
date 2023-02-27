import "./intro.scss"
import { init } from 'ityped'
import amrit from "../../assets/amrit.png"
import {useEffect,useRef} from "react"
export default function Intro() {
    const textRef=useRef()
    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay:1500,
             strings: ['MERN Full Stack developer' ] })
    }, [])
    return (
        <div className="intro" id="intro">
        <div className="left">
        <div className="imageContainer">
        <img src={amrit} alt="" /></div>
        </div>
        <div className="right">
        <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1>Amrit Achaya</h1>
        <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio"><img src="assets/down.png" alt="" /></a>
        </div>
        </div>
    )
}
