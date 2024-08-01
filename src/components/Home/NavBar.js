import React from "react";
import { Link } from "react-router-dom";
import {  AppBar,Toolbar, Breadcrumbs} from "@mui/material";
import intiLogo from "../../img/LOGO INTI 2.jpeg";
import Velas from "./Velas";
//import Link from "react-scroll";

function NavBar(){
   
  return(
    <>
   
    <AppBar>
        <Toolbar style={{background:'#221711'}}>
        <Link to="/">
            <img src={intiLogo} alt="img" style={{width:'120px',height:'80px'}}/>
          </Link>
          <Link src={Velas}>
          Velas
          </Link>
        </Toolbar>
      </AppBar>
      
      
    </>
  )
}

export default NavBar;