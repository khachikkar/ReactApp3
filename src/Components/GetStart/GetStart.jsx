import "./GetStart.css"
import { memo } from "react"

export default memo( function  GetStarted(){
    return(
        <div className="get-started">
            <h1>Get Started with us</h1>
            <p>Join our community of over 1 million users</p>
            <button onClick={()=>window.open("https://yandex.com/")} className=" primaryButton get-started-btn">Get Started</button>
        </div>
    )
})