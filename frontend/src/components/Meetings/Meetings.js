import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import SideNavMeet from './SideNavMeet';
import OverviewMeet from './OverviewMeet';
import ProjPlan from './ProjPlan';
import SprintPlan from './SprintPlan';
import Daily from './Daily';
import Review from './Review';
import Retro from './Retro';

const Meetings = () => {
  let { url } = useRouteMatch();
  return (
    <div>
      <SideNavMeet meetingsUrl={url} />
      <div className="meet-container">
        <Switch>
          <Route path={`${url}`} exact component={OverviewMeet} />
          <Route path={`${url}/project-planning`} component={ProjPlan} />
          <Route path={`${url}/sprint-planning`} component={SprintPlan} />
          <Route path={`${url}/daily`} component={Daily} />
          <Route path={`${url}/review`} component={Review} />
          <Route path={`${url}/retrospective`} component={Retro} />
        </Switch>
      </div>
    </div>
  );
};

export default Meetings;
