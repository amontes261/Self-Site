// ==================================== //
// routes.js - Standard JavaScript File //
// ------ Created by Alex Montes ------ //
// ==================================== //

import React from 'react'
import { Route, Switch } from "react-router-dom";

// ==================== //
// === PAGE IMPORTS === //
// ==================== //

// CORE PAGES //
import HomePage from "./pages/home/home"
import AboutPage from "./pages/about/about"
import ExperiencePage from "./pages/experience/experience"
import ContactPage from "./pages/contact/contact"

// EXPERIENCE-BASED PAGES //
import ResumePage from "./pages/experience/resume/resume"

// MISCALLANROUS PAGES //
import comingSoonPage from "./pages/comingSoon/comingSoon"
import maintenancePage from "./pages/maintenance/maintenance"
import menPage from "./pages/men/men"

// DEFAULT "PAGE NOT FOUND" PAGE //
import notFoundPage from "./pages/notFound/notFound"

// ======================================================= //

const Routes = () => (
    <Switch>
        {/* CORE PAGES */}
        {/* <Route exact path="/" component={HomePage}/> */}
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/experience" component={ExperiencePage}/>
        <Route exact path="/contact" component={ContactPage}/>

        {/* EXPERIENCE-BASED PAGES */}
        <Route exact path="/experience/resume" component={ResumePage}/>

        {/* MISCALLANEOUS PAGES */}

        {/* <Route exact path="/comingSoon" component={comingSoonPage}/> */}
        <Route exact path="/" component={comingSoonPage}/>
        
        <Route exact path="/maintenance" component={maintenancePage}/>
        <Route exact path="/men" component={menPage}/>
        <Route exact path="/notFound" component={notFoundPage}/>

        {/* DEFAULT PAGE: "Page Not Found" */}
        <Route component={notFoundPage} />

    </Switch>
)

export default Routes