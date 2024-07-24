import "./Card.css"




export default function Card({data}){

return(
    <div className="card">

        <div className="icon">{data.icon}</div>
       
        <div className="tt">
        <span>{data.title}</span>
        <br />
        <i>{data.text}</i>
        </div>

        <button className="secbutton">{data.link}</button>

    </div>
)
}