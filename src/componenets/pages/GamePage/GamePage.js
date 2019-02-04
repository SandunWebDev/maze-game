import React, { Component } from "react";

import MazeBoard from "../../widgets/MazeBoard/MazeBoard";
import "./GamePage.css";

export default class GamePage extends Component {
  render() {
    return (
      <div className="GamePage">
        <MazeBoard />
      </div>
    );
  }
}
