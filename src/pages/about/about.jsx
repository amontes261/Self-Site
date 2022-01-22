import React from "react";
import "./about.css"

import { Card } from '@material-ui/core';

// IMPORT TOP NAVBAR COMPONENT //
import NavBar from "../../components/navbar/navbar";

function aboutPage (props) {
    return(
        <div className="aboutCSS">
            <NavBar>
            </NavBar>
            <header className="aboutHeader aboutContainer">
                <Card className= "aboutCard">

                </Card>
            </header>
        </div>
    )
}


export default aboutPage;