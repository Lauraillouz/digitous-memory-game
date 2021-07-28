import React from "react";
// Components
import Button from "./component/Button";
import GameOver from "./component/GameOver";
import Grid from "./component/Grid";

// CSS
import "./App.css";

// Import json
import images from "./images.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      images: images,
      isPlaying: false,
    };
  }

  handleclick() {
    this.setState((prevState) => {
      return {
        ...prevState,
        isPlaying: true,
      };
    });
  }

  render() {
    return (
      <div className="container">
        <div className="head">
          <h1>Memory Card</h1>
          <span>by Classy glassy</span>
        </div>
        <div className="flex">
          {this.state.isPlaying ? (
            <Grid images={this.state.images} />
          ) : (
            <Button onClick={() => this.handleclick()} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
