import CountUp from "react-countup";
import "./Stat.css"
export default function Stat({start, end, name}){
    return (
        <div className="stat">

            <span className="st-num">
              <CountUp start={start} end={end} duration={3}/>
              <span className="st-plus">+</span>
            </span>
              <span className="st-text">{name}</span>
        </div>
    )
}