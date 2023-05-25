import React from "react";
import { Grid, Typography } from "@mui/material";
import logo from "../logo.svg";
import "../styles/textWithImage.css";

const TextToTheRight = ()=>{
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={4}>
        <img src={logo} alt="Esto es una imagen" width="700" height="700"></img>
      </Grid>
      <Grid item xs={4}>
        <Grid
          container
          direction="column"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs>
              <Typography variant="h6">PROFESION COMO TITULO</Typography>
          </Grid>
          <Grid item xs spacing={3}>
              <Typography variant="body1"><b>Subtítulo parrafo 1.<br/>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</b></Typography>
          </Grid>
          <Grid item xs spacing={3}>
              <Typography variant="body1">Descripción parrafo 2.<br/>Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</Typography>
          </Grid>
          <Grid item xs spacing={3}>
              <Typography variant="body1"><i>Descripción parrafo 3.<br/> No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</i></Typography>
          </Grid>
          <Grid item xs spacing={3}>
              <Typography variant="body1"><i>FinishingText parrafo 4.<br/> Texto a completar dependiendo el material que se a mostrado</i></Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const TextToTheLeft = ()=>{
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={4}>
        <Grid
          container
          direction="column"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs>
              <Typography variant="h6">PROFESION COMO TITULO</Typography>
          </Grid>
          <Grid item xs spacing={3}>
              <Typography variant="body1"><b>Subtítulo parrafo 1.<br/>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</b></Typography>
          </Grid>
          <Grid item xs spacing={3}>
              <Typography variant="body1">Descripción parrafo 2.<br/>Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</Typography>
          </Grid>
          <Grid item xs spacing={3}>
              <Typography variant="body1"><i>Descripción parrafo 3.<br/> No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</i></Typography>
          </Grid>
          <Grid item xs spacing={3}>
              <Typography variant="body1"><i>FinishingText parrafo 4.<br/> Texto a completar dependiendo el material que se a mostrado</i></Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <img src={logo} alt="Esto es una imagen" ></img>
      </Grid>
    </Grid>
  );
}



export function TextWithImage(props) {
  
   return props.textToTheRight? <TextToTheRight/>:<TextToTheLeft/>
  
}
