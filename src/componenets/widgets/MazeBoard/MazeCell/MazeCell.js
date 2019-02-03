import React, { Component } from "react";

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

    // Deciding witch image to show.
    if (
      mariosPosition === cellId &&
      mushroomPositions.includes(mariosPosition)
    ) {
      const updatedMushroomPositions = mushroomPositions.filter(position => {
        return position !== mariosPosition;
      });
      console.log("A");
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
