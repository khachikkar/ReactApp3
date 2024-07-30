import "./TodoItem.css"


export default function TodoItem({compl, mydelete, data}){




    let {id, title, completed} = data




    return (
        <div className="task">
            <input
            className="cbox"
            checked={completed}
            onChange={()=> compl(id)}
            type="checkbox"/>
            <h2 >{title}</h2>
            <button
            onClick={() => mydelete(id)}
              className="primaryButton">Remove</button>
        </div>
    )
}