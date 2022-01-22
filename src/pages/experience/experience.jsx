import React from "react";
import "./experience.css"

import { Card } from '@material-ui/core';

// IMPORT TOP NAVBAR COMPONENT //
import NavBar from "../../components/navbar/navbar";

function experiencePage (props) {
    return(
        <div className="experienceCSS">
            <NavBar>
            </NavBar>
            <header className="experienceHeader experienceContainer">
                <Card className= "experienceCard">

                </Card>
            </header>
        </div>
    )
}


export default experiencePage;