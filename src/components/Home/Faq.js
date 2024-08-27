import React from "react";
import styles from "../../css/Home.module.css"
import { Box } from "@mui/material";
import faq from "../../img/faq.jpeg";


function Faq() {
    return(
<div name='faq' id="faq" className={styles.container}>
   <div className={styles.title}>Dudas Frecuentes</div>
   {/* <Box style={{ display: 'flex', alignItems: 'center',backgroundColor: "#F5F5DC" }}>
   <img 
        src={faq} 
        alt="Descripción" 
        style={{ width: '50px', height: '50px', marginRight: '10px' }} 
      />
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
    </Box> */}
    <Box style={{ display: 'flex', alignItems: 'center', backgroundColor: "#F5F5DC", padding: '20px' }}>
      <img 
        src={faq} 
        alt="Descripción" 
        style={{ width: '50%', height: '30%', marginRight: '20px' }} 
      />
      <ul style={{ margin: 0, padding: 0,textAlign:"center" }}>
        <li style={{ marginBottom: '10px' }}>
          <strong>¿Cómo puedo mantener mis velas artesanales en buen estado?</strong>
          <p style={{ margin: 0 }}>
            Para mantener tus velas artesanales en buen estado, es importante mantenerlas alejadas de la luz solar directa y las corrientes de aire. También es recomendable cortar la mecha antes de encender la vela y dejarla encendida por no más de cuatro horas seguidas. Antes de apagar tu vela, asegúrate de que se haya derretido toda la superficie.
          </p>
        </li>
        <li>
          <strong>¿Debo realizar el pedido con anticipación?</strong>
          <p style={{ margin: 0 }}>
            Siempre tenemos velas y mates disponibles en stock, pero en caso que quieras algún producto en específico, recomendamos pedirlo con anticipación.
          </p>
        </li>
      </ul>
    </Box>
      </div>
    )
}

export default Faq;