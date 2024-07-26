import "./Gift.css"
//import ad from "./img/a.png"
 import { motion } from "framer-motion"

export default function Gift(){

  const text = "Սպասեք գեղեցիկ անակնկալների այս կայքում !".split(" ");

    return(
       <section className="g-page">

        <h1>Gift Page</h1>
        
  <div>
{

  text.map((el, i) => (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 3,
        delay: i / 7,
        repeat: Infinity,  
      repeatType: "reverse"
      }}
      key={i}
    >
      {el}{" "}
    </motion.span>
  ))
   
}
    </div>

      <img className="g-add-img" src="https://i.pinimg.com/originals/75/60/2d/75602d62bd0f8cc0ed34dee77dd77420.gif" />

     



       </section>
    )
}




