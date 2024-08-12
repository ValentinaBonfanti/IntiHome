import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import slider from "../../helper/slider.js"
import IntiVideo from "../../img/IntiVideo.mp4"

function Carrusel()
{    

    return (
        <Carousel style={{background:'#221711'}}>
            {
                slider
                .map( (item) => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}

export default Carrusel;