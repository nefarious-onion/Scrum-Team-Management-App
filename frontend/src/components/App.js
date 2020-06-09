import React from 'react';
import AboutScrum from './AboutScrum/AboutScrumView'
import BacklogView from './BacklogView/BacklogView';
import ScrumboardView from './ScrumboardView/ScrumboardView';
import Landing from './Landing/Landing';
import Meetings from './Meetings/Meetings';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

const App = () => {
    return (
        <Router>
            <NavBar />
            <main>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/backlog" component={BacklogView} />
                    <Route path="/scrumboard" component={ScrumboardView} />
                    <Route path="/meetings" component={Meetings} />
                    <Route path="/calendar" />
                    <Route path="/overview" />
                    <Route path='/about' component={AboutScrum} />
                </Switch>
            </main>
        </Router>
    );
};

export default App;
