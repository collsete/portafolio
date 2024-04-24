import './Portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const item = [
    {
        id: 1,
        title: "Desarrollo de API",
        img: "PortfolioNode.png",
        desc: "desarrollo de aplicación en Node.js con el framework Express se conecta a la API externa de BUDA para recuperar datos de los mercados de distintas criptomonedas y calcular el spread en tiempo real de cada una. Además, se han desarrollado otros tipos de endpoints.",
        url: "https://github.com/collsete/Api_Crypto",
    },
    {
        id: 2,
        title: "Shopify Theme",
        img: "portfolioShopify.png",
        desc: "Cración del landing site para una tienda de shopify, con el fin de mejorar la experiencia de usuario y aumentar las ventas. Utilice HTML, CSS, JavaScript y Liquid.",
        url: "https://github.com/collsete/ThemeShopify",
    },
    {
        id: 3,
        title: "Creación de aplicación móvil",
        img: "portfolioTesis.png",
        desc: "Desarrollo de app, se implementó una aplicación móvil en Flutter para el control y manejo del sueño de los usuarios, además de la implementación de algoritmos gamificados para la creación de hábitos.",
        url: "https://github.com/collsete/Tesis",
    },
    {
        id: 4,  
        title: "Desarrollo de sitio web en Wordpress",
        img: "portfolioWordpress.png",
        desc: "Desarrollo de una página web en WordPress para un cliente, la cual se enfoca en la venta de productos de danza árabe. La página está conectada con los servicios de Transbank para facilitar las compras con tarjetas de crédito.",
        url: "https://danzaarabe.net/",
    },

];


const Single = ({item}) => {
    const ref= useRef();
    const handleButtonClick = (item) => {
        window.open(item, '_blank');
    }
    const {scrollYProgress} = useScroll({
        target: ref,
        // offset: ["start start", "end end"] 
    });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    return (
        <Router>
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" /> 
                    </div>
                    <motion.div style= {{y}} className="textContainer">
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                        <button onClick={() => handleButtonClick(item.url)}>Ver más</button>
                    </motion.div>
                </div>
            </div>
        
        </section>
        </Router>

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