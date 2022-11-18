import { useState } from "react"
import "./works.scss"
export default function Works() {
    const [slide,setSlide] = useState(0)
    const data =[{
        id:"1",
        title:"Web Design",
        icon:"./assets/mobile.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sequi autem minima soluta, asperiores, ratione ad in laborum odit rem quaerat laudan",
        img:"https://www.justwebworld.com/wp-content/uploads/2018/10/reactjs-framework.jpg"
    },{
        id:"2",
        icon:"./assets/globe.png",
        title:"Interesting things in wolrd",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sequi autem minima soluta, asperiores, ratione ad in laborum odit rem quaerat laudan",
        img:"http://www.stylishtemplate.com/screenshots/web-template-4452-lrg.jpg"
    },{
        id:"3",
        icon:"./assets/writing.png",
        title:"Pokhara Engineering College",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sequi autem minima soluta, asperiores, ratione ad in laborum odit rem quaerat laudan",
        img:"https://colorlib.com/wp/wp-content/uploads/sites/2/divisima-free-template.jpg"
    }]
    // Handling click
    const handleClick=(way)=>{
        way==="left"?setSlide(slide>0?slide-1:2):setSlide(slide<data.length-1?slide+1:0)


    }

    return (
        <div className="works" id="works">
           <div className="slider" style={{transform:`translateX(-${slide *100}vw)`}}>
           { data.map((data, index)=>(

               <div className="container" key={index}>
               <div className="items">
               <div className="left">
               <div className="leftContainer">
               <div className="imageContainer">
               <img src={data.icon} alt="" />
               </div>
               <h2>{data.title}</h2>
               <p>{data.desc}</p>
               <span>Project</span>
               </div>
               </div>
               <div className="right">
               <img src={data.img} alt="" />
               </div>
               
               </div>
               </div>
               ))}
           </div>
            <img src="assets/arrow.png" className="arrow left" onClick={()=>{handleClick("left")}} alt="" />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>{handleClick()}} />
        </div>
    )
}
