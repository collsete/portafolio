import './Portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from 'react';
const item = [
    {
        id: 1,
        title: "Desarrollo de API",
        img: "PortfolioNode.png",
        desc: "Desarrolle una aplicacio en node.JS con el framework express, la cual se conecta a la api externa de BUDA para recuperar datos de los mercados de distintas cypto monedas y hace el calculo de spread en tiempo real de cada una ademas de haber desarrollado otros tipos de endpoints.",
    },
    {
        id: 2,
        title: "Mobile Application",
        img: "portfolioShopify.png",
        desc: "loremp ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    },
    {
        id: 3,
        title: "Graphic Design",
        img: "portfolioTesis.png",
        desc: "loremp ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    },
    {
        id: 4,  
        title: "Digital Marketing",
        img: "portfolioWordpress.png",
        desc: "loremp ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    },

];


const Single = ({item}) => {
    const ref= useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        // offset: ["start start", "end end"] 
    });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" /> 
                    </div>
                    <motion.div style= {{y}} className="textContainer">
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>Ver más</button>
                    </motion.div>
                </div>
            </div>
            
        </section>


    )
}

const Portfolio = () => {

    const ref= useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset :["end end", "start start"
    ]});

    const scaleX= useSpring(scrollYProgress, {
        stiffness: 100, 
        damping: 30
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Trabajos</h1>
                <motion.div style= {{scaleX:scaleX}}className="progressBar"></motion.div>
            </div>
            {item.map((item) => (
                <Single key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Portfolio;