
import products from "../../listaproductos";
import Carrusel from "./Carrusel";
import NavBar from "./NavBar";
import Velas from "./Velas";
import Mates from "./Mates";


const Home = () => {
  //const products = products;
  console.log(products.categoryId)
  return (
    <>
      <NavBar/>
      <Carrusel/>
      <Velas/>
      <Mates/>
      
    </>
  );
};
export default Home;