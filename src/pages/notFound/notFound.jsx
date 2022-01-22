import React from "react";
import "./notFound.css"

import { Card } from '@material-ui/core';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function notFoundPage (props) {
    return(
        <div className="notFoundCSS">
            <header className="notFoundHeader notFoundContainer">
                <Card className= "notFoundCard">
                    <div className="textContainer">
                        <code className= "notFoundHeader"> Page Not Found </code>
                        <div className= "smallTextContainer">
                            <div class= "pt-5"> You've made it to a page that no-longer exists or are trying to access page that never existed. </div>
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