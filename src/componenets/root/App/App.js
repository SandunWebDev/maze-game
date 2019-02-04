import React, { Component } from "react";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";

import HomePage from "../../pages/HomePage/HomePage";
import GamePage from "../../pages/GamePage/GamePage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Maze Game</h1>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/game" activeClassName="">
              GAME
            </NavLink>
          </li>
        </ul> */}
        <div className="App__container">
          <Switch>
            <Route exact path="/game" component={GamePage} />
            <Route exact path="/" component={HomePage} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
