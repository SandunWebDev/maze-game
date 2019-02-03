import React, { Component } from "react";

import MazeCell from "./MazeCell/MazeCell";
import { generateRandomNumbers } from "./MazeBoard.helpers";

import "./MazeBoard.css";

export default class MazeBoard extends Component {
  constructor(props) {
    super(props);

    const { mazeSize = 10 } = this.props;
    const noOfMazeCell = mazeSize ** 2;

    // Generating mario's initial middle position according to mazeSize.
    const mariosPosition = this.generateMariosPosition(mazeSize);

    // Generating random "mushroom positions" that equavalent to "mazeSize". (Ex: 10x10 grid have 10 mushrooms); Excluding initial mariosPostion.
    const mushroomPositions = generateRandomNumbers({
      min: 0,
      max: noOfMazeCell,
      noOfRandomNum: mazeSize,
      excludeList: [mariosPosition]
    });

    this.state = {
      mazeSize: mazeSize,
      mariosPosition: mariosPosition,
      mushroomPositions: mushroomPositions
    };
  }

  generateMariosPosition(mazeSize) {
    // Calulate how much further (starting from 0) mario should be positioned.

    const middle = Math.round(mazeSize / 2);
    return (middle - 1) * mazeSize + (middle - 1);
  }

  generateMazeCells() {
    const { mazeSize, mariosPosition, mushroomPositions } = this.state;

    const mazeCellList = [];
    const noOfMazeCell = mazeSize ** 2;

    for (let i = 0; i < noOfMazeCell; i++) {
      mazeCellList.push(
        <MazeCell
          cellId={i}
          key={i}
          mariosPosition={mariosPosition}
          mushroomPositions={mushroomPositions}
        />
      );
    }

    return mazeCellList;
  }

  render() {
    const { mazeSize } = this.state;

    const mazeSizeAsStyleProperty = `repeat(${mazeSize}, 1fr)`;
    const mazeBoardStyle = {
      gridTemplateColumns: mazeSizeAsStyleProperty,
      gridTemplateRows: mazeSizeAsStyleProperty
    };

    const generatedMazeCells = this.generateMazeCells();

    return (
      <div className="MazeBoard" style={mazeBoardStyle}>
        {generatedMazeCells}
      </div>
    );
  }
}
