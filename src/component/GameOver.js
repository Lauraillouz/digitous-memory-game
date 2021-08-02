import React from "react";
import Button from "./Button";

class GameOver extends React.Component {
  render() {
    return (
      <div>
        <h1>GameOver</h1>
        <button onClick={this.props.onClick}>replay</button>
      </div>
    );
  }
}

export default GameOver;
