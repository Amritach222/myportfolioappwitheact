import "./testimonials.scss"

export default function Testimonials() {
    const data=[
        {
            id:"1",
            name:"Amrit Acharya",
            title:"Senior Developer",
            img:"assets/amrit.png",
            icon:"assets/twitter.png",
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia id delectus consequuntur praesentium facere pariatur reiciendis excepturi sae"
        },
        {
            id:"2",
            name:"Alex Klinski",
            title:"Co-Founder of DELKA",
            img:"https://www.legalfutures.co.uk/wp-content/uploads/Alex-Mills1.jpg",
            icon:"assets/youtube.png",
            featured:true,
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia id delectus consequuntur praesentium facere pariatur reiciendis excepturi sae"
        },
        {
            id:"3",
            name:"Hazel Ruisko",
            title:"Designer",
            img:"https://www.prettydesigns.com/wp-content/uploads/2014/04/Dusty-Pink-Look-for-Young-Women.jpg",
            icon:"assets/linkedin.png",
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia id delectus consequuntur praesentium facere pariatur reiciendis excepturi sae"
        }
    ]
    return (
        <div className="testimonials" id="testimonials">
           <h1>Testimonials</h1>
            <div className="container">
            {data.map((d,index)=>(

                <div key={index} className={d.featured? "card featured":"card"}>
                <div className="top">
                <img src="assets/right-arrow.png" alt=""  className="left"/>
                <img src={d.img} className="user" alt="" />
                <img src={d.icon} alt="" className="right" />
                </div>
                <div className="center">
                {d.desc}
                </div>
                <div className="bottom">
                <h3> {d.name}</h3>
                <h4>{d.title}</h4>
                </div>
                </div>
                ))}
            </div>
        </div>
    )
}
