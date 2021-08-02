import React from "react";

// Component
import Grid from "./Grid";

class GameOver extends React.Component {
  render() {
    return (
      <div>
        <h1>Game Over: YOU WON</h1>
        <button onClick={this.props.onClick}>replay</button>
      </div>
    );
  }
}

export default GameOver;
