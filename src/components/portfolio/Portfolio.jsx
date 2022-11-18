import { useState,useEffect } from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import {featuredPortfolio,
        webPortfolio,
        mobilePortfolio,
        mlPortfolio} from "../../data.jsx"

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])
    const list=[
        {
        id:"featured",
        title:"Featured"
    },{
        id:"web",
        title:"Web App"
    },{
        id:"mobile",
        title:"Mobile App"
    },{
        id:"ml",
        title:"Machine Learning App"
    }]
    useEffect(() => {
       switch(selected){
            case "featured":
               setData(featuredPortfolio);
               break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                    setData(mobilePortfolio);
                    break;
            case "ml":
                     setData(mlPortfolio);
                     break;
            default:
                setData(featuredPortfolio)
       }
       
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
            {list.map((item, index)=>(
                <PortfolioList
                key={index}
                id={item.id} 
                title={item.title}
                 active={selected===item.id}
                 setSelected={setSelected}/>
            ))}
        </ul>
        <div className="container">
        {
            data.map((d, index)=>(
                <div className="item" key={index}>
                <img src={d.img}
                 alt="" />
                <h3>{d.title}</h3>
            </div>
                
            ))}
        </div>
        </div>
    )
}
