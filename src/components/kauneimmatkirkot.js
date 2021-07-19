import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";
import Grid from "@material-ui/core/Grid";

function Kauneimmatkirkot(){

    return(

        <div>
             <Grid container direction="row" justifyContent="space-between">
        <Grid item>
          <Link style={{ textDecoration: "none" }} to="/suurlahetystot">
            <HiOutlineArrowLeft size="70px"></HiOutlineArrowLeft>
          </Link>
        </Grid>
        <Grid item>
        <Link style={{ textDecoration: "none" }} to="/muutkohteet">
          <HiOutlineArrowRight size="70px"></HiOutlineArrowRight>
          </Link>
        </Grid>
      </Grid>
          <h1>  kauneimmat kirkot </h1>
        </div>
    )
}

export default Kauneimmatkirkot;