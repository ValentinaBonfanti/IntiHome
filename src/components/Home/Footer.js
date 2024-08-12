import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

function Footer()
{
    return (
        <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: '#221711',
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="#EFE4CF" variant="h5">
              Contacto
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="#EFE4CF" variant="subtitle1">
              {`${new Date().getFullYear()} | Tel: +54 9 351-5921681 | Instagram: inti.home`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    )
}

export default Footer;