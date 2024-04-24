import "./Navbar.scss"
import Sidebar from "../sidebar/Sidebar"
import { motion } from "framer-motion"
const Navbar = () => {
    return(
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
            <motion.span 
            initial={{opacity: 0, scale: 0.5}} 
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 1}}
            >
                Oscar Dev</motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/oolf"><img src="/linkedin.png" alt=""/></a>
                <a href="https://github.com/collsete"><img src="/github.jpeg" alt=""/></a>
            </div> 
            </div>   
        </div>
    ); 
};

export default Navbar;