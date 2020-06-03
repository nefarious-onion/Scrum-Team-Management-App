import React from 'react';
import BacklogView from './BacklogView/BacklogView';
import ScrumboardView from './ScrumboardView/ScrumboardView'
import Landing from './Landing/Landing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar/NavBar'

const App = () => {


    return (
        <Router>
            <NavBar />
            <div>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/backlog' component={BacklogView} />
                    <Route path='/scrumboard' component={ScrumboardView} />
                    <Route path='/meetings' />
                    <Route path='/calendar' />
                    <Route path='/overview' />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
