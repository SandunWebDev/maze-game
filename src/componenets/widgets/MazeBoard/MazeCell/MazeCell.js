import React, { Component } from "react";
// import { Howl } from "howler";

import "./MazeCell.css";
import marioSVG from "../../../../assets/images/mario.png";
import mushroomSVG from "../../../../assets/images/mushroom.svg";

export default class MazeCell extends Component {
  handleScoringData() {
    const {
      cellId,
      mariosPosition,
      mushroomPositions,
      handleScoring
    } = this.props;

    // Handling when mushroom is colledcted.
    if (
      mariosPosition === cellId &&
      mushroomPositions.includes(mariosPosition)
    ) {
      // this.collectedSound.play();

      const updatedMushroomPositions = mushroomPositions.filter(position => {
        return position !== mariosPosition;
      });
      handleScoring(updatedMushroomPositions);
    }
  }

  decideCellImage() {
    const { cellId, mariosPosition, mushroomPositions } = this.props;
    let cellImage = "";

    // Deciding witch image to show.
    if (mariosPosition === cellId) {
      cellImage = marioSVG;
    } else if (mushroomPositions.includes(cellId)) {
      cellImage = mushroomSVG;
    }

    return cellImage;
  }

  // componentDidMount() {
  //   this.collectedSound = new Howl({
  //     src: ["../assets/sounds/gameBackgroundMusic.mp3"],
  //     volume: 0.8
  //   });
  // }

  render() {
    const { cellId } = this.props;
    this.handleScoringData();
    return (
      <div className={`MazeCell MazeCell__${cellId}`}>
        <img className="MazeCell__image" src={this.decideCellImage()} alt="" />
      </div>
    );
  }
}
