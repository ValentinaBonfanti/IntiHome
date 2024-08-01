import { Link, Outlet } from "react-router-dom";
import products from "../../listaproductos";
import ItemsCard from "../Items/ItemsCard";
import styles from "../../css/Home.module.css";
import {  AppBar,Toolbar, Typography,Image, Box } from "@mui/material";
/*import background from "../../img/background.webp";*/
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