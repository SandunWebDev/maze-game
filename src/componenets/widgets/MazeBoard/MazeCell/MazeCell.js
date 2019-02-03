import React, { Component } from "react";

import "./MazeCell.css";
import marioSVG from "../../../../assets/images/mario.png";
import mushroomSVG from "../../../../assets/images/mushroom.svg";

export default class MazeCell extends Component {
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

    return (
      <div className="MazeCell">
        <span>{cellId}</span>
        <img className="MazeCell__image" src={this.decideCellImage()} alt="" />
      </div>
    );
  }
}
