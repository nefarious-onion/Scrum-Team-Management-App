import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import SideNavMeet from './SideNavMeet';
import OverviewMeet from './OverviewMeet';
import OneMeeting from './OneMeeting';

const Meetings = () => {
  let { url } = useRouteMatch();
  return (
    <div className="sidenav-grid">
      <SideNavMeet meetingsUrl={url} />
      <div className="meet-container">
        <Switch>
          <Route path={`${url}`} exact component={OverviewMeet} />
          <Route path={`${url}/:meetingType`} component={OneMeeting} />
        </Switch>
      </div>
    </div>
  );
};

export default Meetings;
