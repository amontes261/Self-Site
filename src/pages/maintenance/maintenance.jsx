// =================================== //
// maintenance.jsx - ReactJS HTML File //
// ----- Created by Alex Montes ------ //
// =================================== //

import React from "react";
import "./maintenance.css"

import { Card } from '@material-ui/core';


function maintenancePage (props) {
    return(
        <div className="maintenanceCSS">
            <header className="maintenanceHeader maintenanceContainer">
                <Card className= "maintenanceCard">
                    <div className="textContainer">
                        <code className= "maintenanceHeader"> Down for Maintenance </code>
                        <div className= "smallTextContainer">
                            <div class= "pt-5"> This site is currently undergoing maintenance. </div>
                            <div> There is currently no ETA nor expected wait time for when access will be restored. </div>                        </div>
                        </div>
                    </Card>
                </header>
            </div>
        )
}

export default maintenancePage;