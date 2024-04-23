import { useRef } from "react";
import "./Parallax.scss";
import {motion, useScroll, useTransform} from "framer-motion";

const Parallax = ({type}) => {

  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText=useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
  const yPlanets=useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  return (
    <div className="parallax" 
      ref={ref}
      style={{
        background:
          type === "Servicios"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
          }}>
      <motion.h1 style={{y: yText}}>{ type === "Servicios" ? "Que hago" : "Que hice"}</motion.h1>
      <motion.div className="montanas"></motion.div>
      <motion.div 
        className ="planetas" 
        style={{
          y: yPlanets,
          backgroundImage: `url(${
            type === "Servicios" ? "/planets.png" : "/sun.png"
          })`
        }}
        
        ></motion.div>
      <motion.div className="estrellas" style={{x: yPlanets}}></motion.div>
    </div>
  );
};

export default Parallax;