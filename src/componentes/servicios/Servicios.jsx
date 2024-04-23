import "./servicios.scss"
import {motion} from "framer-motion"
const variants = {
    initial:{
        x: -500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    },
};
const Servicios = () => {
    
    
    return (
    <motion.div className="servicios" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <p>Me concentro en mejorar 
                <br />y agregar valor a su negocio</p>
            <hr />
        </motion.div>
        <motion.div className="tittleContainer" variants={variants}>
            <div className="titulo">
                <img src="/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Ideas</motion.b> Unicas
                </h1>
            </div>
            <div className="titulo">
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Para tu </motion.b> Negocio.
                </h1>
                <button>Que Realice?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="caja" whileHover={{background:"lightgray", color:"black" }}>
                <h2>Desarrollo Web</h2>
                <p>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                </p>
                <button>Go</button> 
            </motion.div>
            <motion.div className="caja" whileHover={{background:"lightgray", color:"black" }}>
                <h2>Desarrollo Web</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                </p>
                <button>Go</button> 
            </motion.div>
            <motion.div className="caja" whileHover={{background:"lightgray", color:"black" }}>
                <h2>Desarrollo Web</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                </p>
                <button>Go</button> 
            </motion.div>
            <motion.div className="caja" whileHover={{background:"lightgray", color:"black" }}>
                <h2>Desarrollo Web</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                </p>
                <button>Go</button> 
            </motion.div>
        </motion.div>
    </motion.div>
        );        
};

export default Servicios;