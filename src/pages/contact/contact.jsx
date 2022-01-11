import React from "react";
import "./contact.css"

import { Card } from '@material-ui/core';

// IMPORT TOP NAVBAR COMPONENT //
import NavBar from "../../components/navbar/navbar";

function contactPage (props) {
    return(
        <div className="contactCSS">
            <NavBar>
            </NavBar>
            <header className="App-header contactContainer">
                <Card className= "contactCard">

                </Card>
            </header>
        </div>
    )
}


export default contactPage;