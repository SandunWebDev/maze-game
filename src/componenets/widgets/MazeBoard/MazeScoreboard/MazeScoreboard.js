import React, { Component } from "react";

import MazeScoreboardInfo from "./MazeScoreboardInfo/MazeScoreboardInfo";

import musicPlayingIcon from "../../../../assets/images/musicPlaying.svg";
import musicStoppedIcon from "../../../../assets/images/musicStopped.svg";
import "./MazeScoreboard.css";

export default class MazeScoreboard extends Component {
  render() {
    const {
      mazeSize,
      steps,
      score,
      catchedMushroomes,
      toggleBackgroundMusic,
      backgroundMusicStatus
    } = this.props;

    const musicIconStyle = backgroundMusicStatus
      ? "MazeScoreboard__musicButton--playing"
      : "MazeScoreboard__musicButton--stopped";

    const musicIconTitle = backgroundMusicStatus ? "Stop Music" : "Play Music";

    return (
      <div className="MazeScoreboard">
        <MazeScoreboardInfo title="Steps" text={steps} />
        <MazeScoreboardInfo title="Catched" text={catchedMushroomes} />
        <MazeScoreboardInfo
          title="Remaining"
          text={mazeSize - catchedMushroomes}
        />
        <MazeScoreboardInfo title="Score" text={score} />

        <div
          className={`MazeScoreboard__musicButton ${musicIconStyle}`}
          onClick={toggleBackgroundMusic}
        />
      </div>
    );
  }
}
