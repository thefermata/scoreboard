import React from 'react';
import {Home} from "./home";
import {Heroes} from "./heroes";
import {Scoreboard} from "./scoreboard";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Menu} from "./Menu";

export class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <Menu>공통메뉴 영역</Menu>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/heroes" component={Heroes}></Route>
            <Route path="/scoreboard" component={Scoreboard}></Route>
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}