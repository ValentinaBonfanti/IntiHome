import React from "react";
import styles from "../../css/Home.module.css"
import { Box } from "@mui/material";


function Faq() {
    return(
<div name='faq' id="faq" className={styles.container}>
   <div className={styles.title}>Dudas Frecuentes</div>
   <Box className={styles.itemContainer}>
  <p>¿Cómo puedo mantener mis velas artesanales en buen estado?
Para mantener tus velas artesanales en buen estado, es importante
mantenerlas alejadas de la luz solar directa y las corrientes de aire.
También es recomendable cortar la mecha a antes de encender la vela y
dejarla encendida por no más de cuatro horas seguidas. Antes de apagar
tu vela asegurate que se haya derretido toda la superficie.
¿Debo realizar el pedido con anticipación?
Siempe tenemos velas y mates disponibles en stock, pero en caso que
quieras algun producto en especifico recomendamos pedirlo con
anticipación.</p>
    </Box>
      </div>
    )
}

export default Faq;