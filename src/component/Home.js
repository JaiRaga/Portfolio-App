import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "90vh"
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container justify='center' className={classes.container}>
      <Grid
        container
        item
        direction='column'
        justify='center'
        alignItems='center'
        xs={8}
        md={10}
        lg={8}>
        <Grid item>
          <Typography variant='h1'>Hello</Typography>
        </Grid>
        <Grid item>
          <Typography variant='h6' align='center'>
            I am Raga! I Code and Build Web Apps...
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
