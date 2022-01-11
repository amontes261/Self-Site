import React from 'react'
import { Redirect, Route } from "react-router-dom";

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

import notFoundPage from "./pages/notFound/notFound"

// ======================================================= //

const BaseRouter = () => (
    <div>
        {/* CORE PAGES */}
        <Route exact path="/homeTemp" component={HomePage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/experience" component={ExperiencePage}/>
        <Route exact path="/contact" component={ContactPage}/>

        {/* EXPERIENCE-BASED PAGES */}
        <Route exact path="/experience/resume" component={ResumePage}/>

        {/* MISCALLANEOUS PAGES */}
        <Route exact path="/" component={comingSoonPage}/>
        <Route exact path="/maintenance" component={maintenancePage}/>
        <Route exact path="/notFound" component={notFoundPage}/>

        {/* <Redirect from="/test" to="/notFound" /> */}

        {/* <Redirect to="/notFound" /> */}
        <Route path="/default-path" component={notFoundPage} />
        
    </div>
)

export default BaseRouter