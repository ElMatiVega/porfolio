import React from 'react'
import { Grid, makeStyles} from "@mui/material";

// const useStyles= makeStyles((theme)=>({

// }))

export function textWithImage(props) {
    // const classes= useStyles()
  return (
    <Grid 
      className='container'
      container
      direction="row" 
      justify="space-around" 
      alignItems="center" 
      spacing={3}
    ></Grid>
  )
}

