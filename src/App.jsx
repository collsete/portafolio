import "./app.scss";
import Navbar from "./componentes/navbar/Navbar";
import Heroe from "./componentes/heroe/Heroe";
import Parallax from "./componentes/parallax/Parallax";
import Servicios from "./componentes/servicios/Servicios";
import Portfolio from "./componentes/portfolio/Portfolio";
import Contacto from "./componentes/contacto/Contacto";
import Cursor from "./componentes/cursor/Cursor";
const App = () => {
  return <div>
    <Cursor />
    <section id="Homepage" >
        <Navbar />
        <Heroe />
    </section>
    <section id="Servicios">
      <Parallax type="Servicios"/>
    </section>
    <section>
      <Servicios />
    </section>
    <section id="Portfolio">
      <Parallax type="Portfolio"/>
    </section>
    <Portfolio />
    <section id="Contacto">
    <Contacto/>
    </section>
  </div>;
};

export default App;
