import React from "react";
import styles from "../../css/Home.module.css"
import { Box } from "@mui/material";
import products from "../../listaproductos"
import ItemsCard from "../Items/ItemsCard";

const Mates = () => {
  return(
<div name='mates' id="mates" className={styles.container}>
   <div className={styles.title}>Mates</div>
   <Box className={styles.itemContainer}>
  {
             products && products
             .filter((product)=> product.categoryId === "mates")
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

export default Mates;