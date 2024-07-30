import cuencoS from "./img/cuencoS.jpeg"
import cuencoPetit from "./img/cuencoPetit.jpeg"
import cuencoM from "./img/cuencoM.jpeg"
import cuencoL from "./img/cuencoL.jpeg"
import cuencoXL from "./img/cuencoXL.jpeg"
import fustaBi from "./img/fustaBi.jpeg"
import fustaTri from "./img/fustaTri.jpeg"


const products = [
    {
        id:1,
        categoryId:"velas",
        name:"Cuenco Petit",
        description:"Contenido Neto: 45gr",
        img: cuencoPetit,
        price:"$2.500",
        stock:95
    },
    {
        id:2,
        categoryId:"velas",
        name:"Cuenco Small",
        description:"Contenido Neto: 45gr",
        img: cuencoS,
        price:"$2.500",
        stock:80
    },
    {
        id:3,
        categoryId:"velas",
        name:"Cuenco M",
        description:"Contenido Neto: 100gr",
        img: cuencoM,
        price:"$4.500",
        stock:100
    },
    {
        id:4,
        categoryId:"velas",
        name:"Cuenco L",
        description:"Contenido Neto: 135gr",
        img:cuencoL,
        price:"$6.200",
        stock:100
    },
    {
        id:5,
        categoryId:"velas",
        name:"Cuenco XL",
        description:"Contenido Neto: 280gr",
        img:cuencoXL,
        price:"$11.500",
        stock:85
    },
    {
        id:6,
        categoryId:"velas",
        name:"Fusta BI",
        description:"Contenido Neto: 55gr",
        img:fustaBi,
        price:"$4.700",
        stock:85
    },
    {
        id:7,
        categoryId:"velas",
        name:"Fusta TRI",
        description:"Contenido Neto: 80gr",
        img:fustaTri,
        price:"$5.700",
        stock:85
    }
]

export default products;