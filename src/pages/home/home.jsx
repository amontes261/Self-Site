// ============================ //
// home.jsx - ReactJS HTML File //
// -- Created by Alex Montes -- //
// ============================ //

import React from "react";
import "./home.css"

import { Card } from '@material-ui/core';

// IMPORT TOP NAVBAR COMPONENT //
import NavBar from "../../components/navbar/navbar";

var cardDivStyle = {
    flex:1,
    backgroundColor:'white',
    color: 'black',
    fontSize: '40px',
    height: '90%'
};

function homePage (props) {
    return(
        <div className="homeCSS">
            <NavBar />
            <header className="homeHeader homeContainer">
                <div className= "cardContainer">
                    <Card className= "homeCard">
                        <div className= "textContainer" style={cardDivStyle}>
                            Hi, I'm Alex.
                        </div>
                    </Card> 
                </div>
            </header>
            
        </div>
    )
}


export default homePage;