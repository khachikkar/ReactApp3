import "./MedalTable.css"

import medaldata from "../MedalTable/medaldata.json"




const initial = {
    country : "Country",
    Gold : "Gold",
    Silver: "Silver",
    Bronze: "Bronze",
    All:"All"

}


const data = medaldata.medals



export default function MedalTable(){
    return(

       <div className="m-table">


        <h1>Medal Table</h1>
        <h3>Next Update - {medaldata.date}</h3>
        <Tableitem data ={initial} />
        {
            data.map((item)=> <Tableitem key={item.country} data={item}/>)
        }


       </div>

    )
}


const Tableitem =({data})=>{
    return(
    <div className="m-info">
    <h4>{data.country}</h4>
    <span>{data.Gold}</span>
    <span>{data.Silver}</span>
    <span>{data.Bronze}</span>
    <strong>{(typeof data.Gold === "number") ? (data.Gold + data.Silver + data.Bronze) : "All"}</strong>
    </div>
    )
}