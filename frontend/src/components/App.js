import React from 'react';
import AboutScrumView from './AboutScrum/AboutScrumView';
import BacklogView from './BacklogView/BacklogView';
import ScrumboardView from './ScrumboardView/ScrumboardView';
import Landing from './Landing/Landing';
import Meetings from './Meetings/Meetings';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Calendar from './Calendar/Calendar';
import EventPlanning from './EventPlanning/EventPlanning';

const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={AboutScrumView} />
          <Route path="/meetings" component={Meetings} />
          <Route path="/eventplanning" component={EventPlanning} />
          <Route path="/backlog" component={BacklogView} />
          <Route path="/scrumboard" component={ScrumboardView} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/overview" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
