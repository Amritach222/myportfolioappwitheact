import "./menu.scss"

export default function Menu({menuOpen,setmenuOpen}) {
    const handleMenuClick=()=>{
            setmenuOpen(false);
    }
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
            <li onClick={handleMenuClick}><a href="#intro">Home</a></li>
            <li onClick={handleMenuClick}><a href="#portfolio">Portfolio</a></li>
            <li onClick={handleMenuClick}><a href="#works">Works</a></li>
            <li onClick={handleMenuClick}><a href="#testimonials">Testimonials</a></li>
            <li onClick={handleMenuClick}><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}
