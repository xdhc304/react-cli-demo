import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Index from "./components/index.js";
import Welcome from "./components/Welcome.js";
import DigitalClock from "./components/DigitalClock.js";
import Comment from "./components/Comment.js";
import Theme from "./components/Theme.js";

export class MainRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path={'/'} component={Index} />
          <Route exact path={'/welcome'} component={Welcome} />
          <Route exact path={'/digitalClock'} component={DigitalClock} />
          <Route exact path={'/comment'} component={Comment} />
          <Route exact path={'/theme'} component={Theme} />
        </Switch>
      </HashRouter>
    );
  }
}
