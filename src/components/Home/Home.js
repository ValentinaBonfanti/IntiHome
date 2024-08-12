
import products from "../../listaproductos";
import Carrusel from "./Carrusel";
import NavBar from "./NavBar";
import Velas from "./Velas";
import Mates from "./Mates";
import Tazas from "./Tazas";
import Footer from "./Footer";
import Faq from "./Faq";


const Home = () => {
  return (
    <>
      <NavBar/>
      <Carrusel/>
      <Velas/>
      <Mates/>
      <Tazas/>
      <Faq/>
      <Footer/>
    </>
  );
};
export default Home;