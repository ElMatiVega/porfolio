import React from "react";
import { Grid, Typography } from "@mui/material";
import '../styles/CenteredText.css'


export function CenteresText() {
  // const classes= useStyles()
  return (
    <Grid 
      className='container'
      container
      direction="column" 
      justify="space-around" 
      alignItems="center" 
      spacing={3}
    >
      <Grid item xs>
        <Typography variant="body1" align="center" gutterBottom='true'>
          ¿Qué es Lorem Ipsum?
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="body1" align="center" gutterBottom='true'>
         <b>Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto.</b> 
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="body1" align="center" gutterBottom='true'>
          Lorem Ipsum ha sido el texto de relleno estándar de las industrias
          desde el año 1500, cuando un impresor (N. del T. persona que se dedica
          a la imprenta) desconocido usó una galería de textos y los mezcló de
          tal manera que logró hacer un libro de textos especimen. No sólo
          sobrevivió 500 años, sino que tambien ingresó como texto de relleno en
          documentos electrónicos, quedando esencialmente igual al original. Fue
          popularizado en los 60s con la creación de las hojas "Letraset", las
          cuales contenian pasajes de Lorem Ipsum, y más recientemente con
          software de autoedición, como por ejemplo Aldus PageMaker, el cual
          incluye versiones de Lorem Ipsum.
        </Typography>
      </Grid>
    </Grid>
  );
}
