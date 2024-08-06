import React from "react";
import styles from "../../css/Home.module.css"
import { Box } from "@mui/material";
import products from "../../listaproductos"
import ItemsCard from "../Items/ItemsCard";
import { Element } from "react-scroll";

const Velas = () => {
  return(
<div name='velas'id="velas" className={styles.container}>
  <Element name="velas">
   <div className={styles.title}>Velas</div>
   <Box className={styles.itemContainer}>
  {
             products && products
             .filter((product)=> product.categoryId === "velas")
            .map((item) => 
             {
                 return (
                 <div key={item.id}>
                 <ItemsCard
                 name={item.name}
                 img={item.img}
                 id={item.id}
                 description={item.description}
                 price={item.price}
                 
                 />
                 </div>
                 )
             })
            
            }
            </Box>
            </Element>
      </div>
      
  )
}

export default Velas;