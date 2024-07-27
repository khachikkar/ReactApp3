import "./Paris.css";
import pdata from "./Parisdata.json";
import { motion } from "framer-motion";

const {
  name,
  start_date,
  end_date,
  logo_url,
  parislo,
  location,
  teams_count,
  events_count,
  sports,
} = pdata.olympics;

export default function Paris() {
  return (
    <section className="p-part">
      <motion.h1
      initial={{ y: "-6rem", opacity: "0" }}
      animate={{ y: "0", opacity: "1" }}
      transition={{ duration: 4, type:"spring" }}
      >{name}</motion.h1>
      <div className="flex date">
        <span>{start_date}</span>
        <span>to</span>
        <span>{end_date}</span>
      </div>

      <div className="flex logos">
        <motion.img
          initial={{ y: "-6rem", opacity: "0" }}
          animate={{ y: "0", opacity: "1" }}
          transition={{ duration: 4, type: "spring" }}
          src={logo_url}
          alt=""
        />
        <motion.img
        initial={{ y: "6rem", opacity: "0" }}
        animate={{ y: "0", opacity: "1" }}
        transition={{ duration: 4, type: "spring" }}
        src={parislo} 
        alt="" />
      </div>

      <div className="imgg"></div>

      <div className="flex location">
        <h2>
          Location <br />
          <span>{location}</span>{" "}
        </h2>
        <h2>
          Team Counts <br />
          <span>{teams_count}</span>
        </h2>
        <h2>
          Ecent Counts <br />
          <span>{events_count}</span>
        </h2>
      </div>

      <div className="flex sport">
        <h1>Sports</h1>

        {sports.map((sport, index) => (
          <h3 key={index}>{sport}</h3>
        ))}
      </div>

      <h1>Happy Olympics !</h1>

      <img className="smlogo" src={logo_url} alt="" />
    </section>
  );
}
