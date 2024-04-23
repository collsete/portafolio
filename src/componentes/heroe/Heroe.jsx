import "./Heroe.scss";
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,

        },
    },
    scrollButton:{
        opacity: 0,
        y: 20,
        transition: {
            repeat: Infinity,
            duration: 2,
        },
    },

};

const sliderVariants = {
    initial: {
        x: 0,
},
    animate: {
        x: "-220%",
        transition : {
            repeat: Infinity,
            duration: 20,
            repeatType: "mirror",
        },
    },
}

const heroe = () => {
    return(
        <div className="heroe">
            <div className="wrapper">
                <motion.div className="textContainer" 
                variants={textVariants} 
                initial= "initial" 
                animate="animate">
                    <motion.h2 variants={textVariants}>Oscar Ortiz</motion.h2>
                    <motion.h1 variants={textVariants}>Junior Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.a variants={textVariants} className="primary" href="#Portfolio">Ultimos trabajos</motion.a>
                        <motion.a variants={textVariants} className="secondary" href="#Contacto">Contactame</motion.a>
                    </motion.div>
                    <motion.img variants= {textVariants}src="scroll.png" alt="" animate="scrollButton"/>
                </motion.div>
            </div>
            <motion.div className="sliddingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                junior developer Front-end Back-end
            </motion.div>
            <div className="imageContainer">
            <img src= "heroe.png" alt="" />
            </div>
            </div>
        
    );
}

export default heroe;