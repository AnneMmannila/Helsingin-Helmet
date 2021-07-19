import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 200,
    minHeight: 150
  }
});


function Suurlahetystot() {


  const classes = useStyles();

  return (
    <div>
      <Grid container direction="row" justifyContent="space-between">
        <Grid item>
          <Link style={{ textDecoration: "none" }} to="/">
            <HiOutlineArrowLeft size="70px"></HiOutlineArrowLeft>
          </Link>
        </Grid>
        <Grid item>
        <Link style={{ textDecoration: "none" }} to="/kauneimmatkirkot">
          <HiOutlineArrowRight size="70px"></HiOutlineArrowRight>
          </Link>
        </Grid>
      </Grid>

      <Grid>
      </Grid>

<Card className={classes.root}>
<CardHeader title="Belgium"/>c
    <CardActionArea title="belgium">
<CardMedia component = "img"/>
<img src="https://www.countryflags.io/be/shiny/64.png"></img>
<CardContent>
</CardContent>
</CardActionArea>

</Card>

      
      <h1> Suurlähetystöt</h1>
      <Button variant= 'contained' color='primary' >get pic</Button>
    </div>
  );
}

export default Suurlahetystot;
