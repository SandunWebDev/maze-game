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
      mushroomPositions: mushroomPositions,
      steps: 0
    };
  }

  generateMariosPosition(mazeSize) {
    // Calulate initially how much further (starting from 0) mario should be positioned.

    const middle = Math.round(mazeSize / 2);
    return (middle - 1) * mazeSize + (middle - 1);
  }

  generateMazeCells() {
    const { mazeSize, mariosPosition, mushroomPositions } = this.state;

    const mazeCellList = [];

    // "mazeSize" determine how many cells will be thare. (Ex: When "mazeSize" is 10, we will get "10x10 Grid".);
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

  handleKeyNavigation(e) {
    const {
      mariosPosition: mariosCurrentPosition,
      mazeSize,
      steps
    } = this.state;
    const direction = e.key;

    function isValidKeyNavigation(direction, mariosCurrentPosition, mazeSize) {
      // Validating direction is possible or not through current row & column. (For ex. when we are in the top row we should not be able to go further up.
      // "mazeSize" is equavelent to "No of cells per Row, Column" and "No of Rows, Columns per Grid".
      const currentRow =
        mariosCurrentPosition % mazeSize === 0
          ? Math.ceil(mariosCurrentPosition / mazeSize) + 1 // Since calculation start from 0.
          : Math.ceil(mariosCurrentPosition / mazeSize);
      const currentColumn =
        mazeSize -
        (Math.ceil(currentRow * mazeSize) - 1 - mariosCurrentPosition);

      switch (direction) {
        case "ArrowUp": {
          // False when we are in First Row.
          return currentRow > 1;
        }

        case "ArrowDown": {
          // False when we are in Last Row.
          return currentRow < mazeSize;
        }

        case "ArrowLeft": {
          // False when we are in First Column.
          return currentColumn > 1;
        }

        case "ArrowRight": {
          // False when we are in Last Column.
          return currentColumn < mazeSize;
        }
        default: {
          // For any other key direction is not possible.
          return false;
        }
      }
    }

    if (!isValidKeyNavigation(direction, mariosCurrentPosition, mazeSize)) {
      // If not a valid navigation nothing happens.
      return;
    } else {
      switch (direction) {
        case "ArrowUp": {
          this.setState({
            mariosPosition: mariosCurrentPosition - mazeSize,
            steps: steps + 1
          });
          break;
        }

        case "ArrowDown": {
          this.setState({
            mariosPosition: mariosCurrentPosition + mazeSize,
            steps: steps + 1
          });
          break;
        }

        case "ArrowLeft": {
          this.setState({
            mariosPosition: mariosCurrentPosition - 1,
            steps: steps + 1
          });
          break;
        }

        case "ArrowRight": {
          this.setState({
            mariosPosition: mariosCurrentPosition + 1,
            steps: steps + 1
          });
          break;
        }
        default:
      }
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyNavigation.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener(
      "keydown",
      this.handleKeyNavigation.bind(this)
    );
  }

  render() {
    const { mazeSize, steps } = this.state;

    console.log(steps);

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
