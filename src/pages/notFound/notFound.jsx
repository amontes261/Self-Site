// ================================ //
// notFound.jsx - ReactJS HTML File //
// ---- Created by Alex Montes ---- //
// ================================ //

import React from "react";
import "./notFound.css"

import { Card } from '@material-ui/core';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function notFoundPage (props) {
    return(
        <div className="notFoundCSS">
            <header className="notFoundPageHeader notFoundContainer">
                <Card className= "notFoundCard">
                    <div className="textContainer">
                        <code className= "notFoundHeader"> Page Not Found </code>
                        <div className= "smallTextContainer">
                            <div class= "pt-5"> You've made it to a page that no-longer exists or never existed. </div>
                            </div>
                        </div>
                    </Card>
                    <Link to="/">
                        <Button variant= "danger" title="Return Home" primary dark className="returnButton">
                            Return Home
                        </Button>

                    </Link>
                </header>
            </div>
        )
}

export default notFoundPage;