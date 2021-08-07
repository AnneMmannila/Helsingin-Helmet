import React from "react";
import { useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import styles from './style.module.css';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    maxWidth: 1000,
    minHeight: 200,
    paddingLeft: 350
  },
  pic: {
    minWidth: 100,
    maxWidth: 150,
    minHeight: 150,
    marginRight: 50
  }
});

function Suurlahetystot() {
  const classes = useStyles();

  return (
    <div className= {styles.suurlahetystot}>
      <h1> Suurlähetystöt</h1>

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

      <Grid></Grid>

      
        <ImageList className={classes.root} cols={3}>
          <ImageListItem classes= {{root: classes.pic}}>
            <img
              src="https://www.countryflags.io/be/shiny/64.png"
              alt={"testi"}
            />
          </ImageListItem>
          <ImageListItem classes= {{root: classes.pic}}>
            <img
              src="https://www.countryflags.io/it/shiny/64.png"
              alt={"testi"}
            />
          </ImageListItem>
          <ImageListItem classes= {{root: classes.pic}} >
            <img
              src="https://www.countryflags.io/fi/shiny/64.png"
              alt={"testi"}
            />
          </ImageListItem>
          <ImageListItem classes= {{root: classes.pic}}>
            <img
              src="https://www.countryflags.io/nl/shiny/64.png"
              alt={"testi"}
            />
          </ImageListItem>
        </ImageList>
      
    </div>
  );
}

export default Suurlahetystot;
