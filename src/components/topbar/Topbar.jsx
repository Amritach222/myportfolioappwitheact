import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Topbarr({menuOpen,setmenuOpen}) {
    return (
        <div className={"topbar "+(menuOpen && "active")}>
        <div className="wrapper">
        <div className="left"><a href="#intro" className="logo">Amrit.</a>
        <div className="itemContainer">
        <Person className="icon"/>
        <span>+977 9814119703</span>
        <div className="itemContainer">
        <Mail className="icon"/>
        <span>amritach222@gmail.com</span>
        </div>
        </div>
        </div>
        <div className="right">
        <div className="hamburgermenu" onClick={()=>{setmenuOpen(!menuOpen)}}>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
        </div>
        </div>
        </div>
            
        </div>
    )
}
