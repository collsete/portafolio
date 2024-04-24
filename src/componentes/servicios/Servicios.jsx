import "./servicios.scss"
import {motion} from "framer-motion"
import { BrowserRouter as Router } from 'react-router-dom';
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

    const handleButtonClick = () => {
        window.open('https://github.com/collsete', '_blank');
    }

    const handleButtonClickLinkedin = () => {
        window.open('https://www.linkedin.com/in/oolf/', '_blank');
    }
    return (
    <Router>
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
                    <motion.b whileHover={{color:"orange"}}>Competencias</motion.b> Técnicas
                </h1>
            </div>
            <div className="titulo">
                <h1>
                    <motion.b whileHover={{color:"orange"}}> Destacadas. </motion.b>
                </h1>
                    <button onClick={handleButtonClick} >¿Qué Realicé?</button>

            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>

            <motion.div className="caja" whileHover={{background:"lightgray", color:"black" }}>
                <h2>Desarrollo Frontend</h2>
                <ul>
                    <li>Angular</li>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Liquid</li>
                    <li>TypeScript</li>
                </ul>
                <button onClick={handleButtonClickLinkedin}>Ir</button> 
            </motion.div>
            <motion.div className="caja" whileHover={{background:"lightgray", color:"black" }}>
                <h2>Desarrollo Backend</h2>
                <ul>
                    <li>Node.Js</li>
                    <li>Python</li>
                    <li>Express</li>
                    <li>Django</li>
                </ul>
                <button onClick={handleButtonClickLinkedin}>Ir</button> 
            </motion.div>
            <motion.div className="caja" whileHover={{background:"lightgray", color:"black" }}>
                <h2>Complementos</h2>
                <ul>
                    <li>Postman</li>
                    <li>Jira</li>
                    <li>Metodologia ágil</li>
                    <li>Wordpress</li>
                    <li>Shopify</li>
                    <li>SQL</li>
                </ul>
                <button onClick={handleButtonClickLinkedin}>Ir</button> 
            </motion.div>
        </motion.div>
    </motion.div>
    </Router>
        );        
};

export default Servicios;