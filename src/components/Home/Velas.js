import React from "react";
import styles from "../../css/Home.module.css"
import { Box } from "@mui/material";
import products from "../../listaproductos"
import ItemsCard from "../Items/ItemsCard";

const Velas = () => {
  return(
<div name='velas' className={styles.container}>
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
      </div>
  )
}

export default Velas;