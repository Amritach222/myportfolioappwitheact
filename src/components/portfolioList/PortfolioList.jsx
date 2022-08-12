import './portfolioList.scss'

export default function PortfolioList(props) {
    return (
        <li className={props.active ? "portfolioList active":"portfolioList"}id="portfolioList" onClick={()=>{props.setSelected(props.id)}}>
            {props.title}
        </li>
    )
}
