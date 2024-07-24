import Stat from "../Stats/Stat";
import "./Hero.css";
import fimage from "/Users/khachkarapetyan/Desktop/skills/src/img/fone.jpeg";
import React from "react";
import { memo } from "react";
import { motion } from "framer-motion"

export default memo(function Hero() {
  return (
    <section className="hero">
      <div className="heroCont">
        <motion.div
        initial={{y:"-6rem", opacity: "0"}}
        animate={{y:"0", opacity: "1"}}
        transition={{duration: 4, type: "spring"}}

        
        className="blurgrad" />
        {/* lefts side*/}
        <div className="hero-left">
          <div className="hero-title">
            <motion.h1
            initial={{y:"2rem", opacity: "0"}}
            animate={{y:"0", opacity: "1"}}
            transition={{duration: 4, type: "spring"}}

            >
              Find Your <br />
              Dream Home here!
            </motion.h1>
          </div>
          <div className="hero-desc">
            <span>Just find your dream and enjoy</span>
            <span>Configure and start uncover things</span>
          </div>
          <div className="search-bar">
            <input
              className="Input"
              type="text"
              placeholder="Find your dream..."
            />
            <button className="primaryButton">Search</button>
          </div>

          <div className="stats">
            <Stat start={300} end={470} name={"Home"} />
            <Stat start={4900} end={5000} name={"Images"} />
            <Stat start={500} end={580} name={"Daily Users"} />
          </div>
        </div>

        {/* Riught side*/}
        <div className="hero-right">
          <motion.div 
          initial={{x:"2rem", opacity: "0"}}
          animate={{x:"0", opacity: "1"}}
          transition={{duration: 4, type: "spring"}}

          className="imgCont">
            <img src={fimage} alt="img"></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
});
