import "./Gift.css"
import ad from "./img/a.png"
import { motion } from "framer-motion"

export default function Gift(){
    return(
       <section className="g-page">

        <h1>Gift Page</h1>

        <motion.div
className="aa"
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  ></motion.div>
        
        <motion.img
        
        initial={{y:"-2rem", opacity: "0"}}
        animate={{y:"0", opacity: "1"}}
        transition={{duration: 4, type: "spring"}}

        className="g-add-img" src={ad} />



       </section>
    )
}




