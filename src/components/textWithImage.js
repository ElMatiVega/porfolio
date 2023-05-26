import React from "react";
import { Grid, Typography } from "@mui/material";
import "../styles/textWithImage.css";
const Description = (props) => {
  return (
    <Grid item xs spacing={3}>
      <Typography variant="body1">{props.description}</Typography>
    </Grid>
  );
};
const TextToTheRight = (props) => {
  
 
  return (
    <Grid
    className="gridTextToTheRigth"
      container
      direction="row"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={4}>
        <img
          src={props.content.img}
          alt="Esto es una imagen"
          width="700"
          height="700"
        ></img>
      </Grid>
      <Grid item xs={4}>
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid item xs>
            <Typography variant="h6">{props.content.title}</Typography>
          </Grid>
          <Grid item xs spacing={3}>
            <Typography variant="body1">
              <b>{props.content.subtitle}</b>
            </Typography>
          </Grid>
          
          {props.content.descriptions.map((description)=>(
            <Description description={description}/>
          ))}

          <Grid item xs spacing={3}>
            <Typography variant="body1">
              <i>
                FinishingText parrafo 4.
                <br /> Texto a completar dependiendo el material que se a
                mostrado
              </i>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const TextToTheLeft = (props) => {
  return (
    <Grid
      className="gridTextToTheLeft"
      container
      direction="row"      
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={4}>
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid item xs>
            <Typography variant="h6">{props.content.title}</Typography>
          </Grid>
          <Grid item xs spacing={3}>
            <Typography variant="body1">
            {props.content.subtitle}
            </Typography>
          </Grid>
          {props.content.descriptions.map((description)=>(
            <Description description={description}/>
          ))}
          {/* <Grid item xs spacing={3}>
            <Typography variant="body1">
              Descripción parrafo 2.
              <br />
              Lorem Ipsum ha sido el texto de relleno estándar de las industrias
              desde el año 1500, cuando un impresor (N. del T. persona que se
              dedica a la imprenta) desconocido usó una galería de textos y los
              mezcló de tal manera que logró hacer un libro de textos especimen.
            </Typography>
          </Grid>
          <Grid item xs spacing={3}>
            <Typography variant="body1">
              <i>
                Descripción parrafo 3.
                <br /> No sólo sobrevivió 500 años, sino que tambien ingresó
                como texto de relleno en documentos electrónicos, quedando
                esencialmente igual al original.
              </i>
            </Typography>
          </Grid> */}
          <Grid item xs spacing={3}>
            <Typography variant="body1">
              <i>
                FinishingText parrafo 4.
                <br /> Texto a completar dependiendo el material que se a
                mostrado
              </i>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <img src={props.content.img} alt="Esto es una imagen"></img>
      </Grid>
    </Grid>
  );
};

export function TextWithImage(props) {
  return props.textToTheRight ? (
    <TextToTheRight content={props.content} />
  ) : (
    <TextToTheLeft content={props.content} />
  );
}
