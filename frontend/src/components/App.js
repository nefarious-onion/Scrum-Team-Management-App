import React from 'react';
import NavBar from './NavBar/NavBar'
//import AboutScrum from './AboutScrum/AboutScrumView'
import AboutScrum from './AboutScrum/TestAbout/AboutScrumView'
import BacklogView from './BacklogView/BacklogView';
import ScrumboardView from './ScrumboardView/ScrumboardView'
import Landing from './Landing/Landing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const App = () => {


    return (
        <Router history={createBrowserHistory()}>
            <NavBar />
            <div>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/backlog' component={BacklogView} />
                    <Route path='/scrumboard' component={ScrumboardView} />
                    <Route path='/meetings' />
                    <Route path='/calendar' />
                    <Route path='/overview' />
                    <Route path='/about' component={AboutScrum} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
