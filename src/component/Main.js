import React from 'react'
import { Switch, Route} from 'react-router-dom'

import LandingPage from './LandingPage'
import AbouMe from './AboutMe';
import Contact from './Contact';
import Project from './Project';
import Resume from './Resume';



const Main = () => (
    <Switch>
        <Route exact path = "/" component={LandingPage} />
        <Route path = "/aboutme" component={AbouMe} />
        <Route path = "/contact" component={Contact} />
        <Route path = "/project" component={Project} />
        <Route path = "/resume" component={Resume} />
    </Switch>
)

export default Main;
