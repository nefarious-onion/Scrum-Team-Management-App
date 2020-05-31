import React from 'react';
import BacklogView from './BacklogView/BacklogView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar/NavBar'

const App = () => {


    return (
        <Router>
            <NavBar />
            <div>
                <Switch>
                    <Route exact path='/' component={BacklogView} />
                    <Route path='/scrumboard' />
                    <Route path='/meetings' />
                    <Route path='/calendar' />
                    <Router path='/overview' />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
