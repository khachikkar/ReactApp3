import "./ProductItem.css"


export default function ProductItem({data}){
    return(
        <div className="product">
            <img src={data.url} alt="prod-img" width={250} />
            <span><i>$</i>{data.price}</span>
            <h2>{data.title}</h2>
            <p>{data.text.length > 50 ? data.text.slice(0,50)+"...": data.text}</p>
        </div>
    )
}