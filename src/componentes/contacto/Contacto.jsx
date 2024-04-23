import "./Contacto.scss";
import {motion} from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,

        },
    },
}
const Contacto = () => {
    const [error, setError] = useState(false);
    const [succes, setsucces] = useState(false);
    const ref = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_4jgdafh', 'template_95efa2l', ref.current, {
            publicKey: 'JsKftxtyqk7-OJ6M_',
          })
          .then(
            () => {
              setsucces(true);
            },
            (error) => {
                setError(true);
            },
          );
      };
    return (
        <motion.div className="contacto" variants={variants} initial="initial" whileInView="animate">
            <motion.div variants={variants} className="textContainer">
                <motion.h1 variants={variants}>Trabajemos juntos!</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>Oscar.Ortiz111@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Direccion</h2>
                    <span>Canal Kirke 550, Viña Del Mar</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Telefono</h2>
                    <span>+56932936415</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <form ref={ref} onSubmit={sendEmail}>
                    <input type="text" required placeholder="Nombre" name="name"/>
                    <input type="text" required placeholder="Email" name="email"/>
                    <textarea id="" cols="80" rows="10" placeholder="Mensaje" name="message"></textarea>
                    <button>Enviar</button>
                    {error && "Error al enviar el mensaje"}
                    {succes && "Mensaje enviado correctamente"}
                </form>
            </div>
        </motion.div>
            );
}

export default Contacto;