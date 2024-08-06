// 

import React from "react";
import { AppBar, Toolbar, Box, Link as MuiLink} from "@mui/material";
import intiLogo from "../../img/LOGO INTI 2.jpeg";
import { Link as ScrollLink } from "react-scroll";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <AppBar>
        <Toolbar sx={{ background: '#221711' }}>
          <MuiLink href="/" underline="none">
            <img src={intiLogo} alt="img" style={{ width: '120px', height: '80px' }} />
          </MuiLink>
         <Box style={{position: 'absolute',
        top: '40%',
        right: '10%',
        color:'#f2dfd5',
        fontFamily:'Didot',
        fontSize:'25px',
        textAling:'center'}}>
          <ScrollLink smooth={true} to="velas" style={{ marginLeft: '20px', color: 'white', cursor: 'pointer' }}>
            Velas
          </ScrollLink>
          <ScrollLink smooth={true} to="mates" style={{ marginLeft: '20px', color: 'white', cursor: 'pointer' }}>
            Mates
          </ScrollLink>
          
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
