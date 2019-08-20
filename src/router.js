import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Index from "./components/Index.js";
import Welcome from "./components/Welcome.js";
import DigitalClock from "./components/DigitalClock.js";
import Comment from "./components/Comment.js";
import Theme from "./components/Theme.js";
import Blog from "./components/blog";
import Tabbar from "./components/tabbar/global";
import Home from "./components/tabbar/home";
import Category from "./components/tabbar/category";
import Car from "./components/tabbar/car";
import User from "./components/tabbar/user";

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
          <Route exact path={'/blog'} component={Blog} />
          <Route exact path={'/tabbar'} component={Tabbar} />
          <Route exact path={'/home'} component={Home} />
          <Route exact path={'/category'} component={Category} />
          <Route exact path={'/car'} component={Car} />
          <Route exact path={'/user'} component={User} />
        </Switch>
      </HashRouter>
    );
  }
}
