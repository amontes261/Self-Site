
import React from "react";
import "./home.css"

import { Card } from '@material-ui/core';

// IMPORT TOP NAVBAR COMPONENT //
import NavBar from "../../components/navbar/navbar";

function homePage (props) {
    return(
        <div className="homeCSS">
            <NavBar>
            </NavBar>
            <header className="App-header homeContainer">
                <Card className= "homeCard">

                </Card>
            </header>
        </div>
    )
}


export default homePage;