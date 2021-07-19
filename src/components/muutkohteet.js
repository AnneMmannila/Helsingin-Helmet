import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";


function Muutkohteet() {

    return(

        <div>
            <Link style={{ textDecoration: "none" }} to="/kauneimmatkirkot">
            <HiOutlineArrowLeft size="70px"></HiOutlineArrowLeft>
          </Link>
            <h1>Muut kohteet</h1>
        </div>
    )
}

export default Muutkohteet;