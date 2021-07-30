import React from "react";
// Components
import Button from "./component/Button";
import GameOver from "./component/GameOver";
import Grid from "./component/Grid";
import Test from "./component/Test";

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
      isPlaying: true,
    };
  }



  shuffle = (arr) => {
    for (let i = 0; i > arr.length; i++) {
      let randomId = Math.floor(Math.random() * arr.length);
      let copyCurrent = { ...arr[i] };
      let copyRandom = { ...arr[randomId] };
      arr[i] = copyRandom;
      arr[randomId] = copyCurrent;
    }
    return arr;
  };

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
        {this.state.isPlaying ? (
          <Grid images={this.state.images} />
        ) : (
          <Button onClick={()=>this.handleclick()}/>
        )}
      </div>
    );
  }
}

export default App;
