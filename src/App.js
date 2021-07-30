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
    const deck = images.concat(images).sort(() => Math.random() - 0.5);
    this.state = {
      score: 0,
      deck: deck,
      isPlaying: false,
      isclicked: null,
      showingCards: null,
      checkingCards: null,
      matchingCards: null,
    };
  }

  componentDidUpdate() {
    console.log(this.state.showing);
    console.log(this.state.isMatching);
  }

  // Methods
  handleclick() {
    this.setState((prevState) => {
      return {
        ...prevState,
        isPlaying: true,
      };
    });
  }

  clickCard = (image) => {
    let imagesShowing = this.state.showing.length;
    let cardName1 = this.state.showing[0];
    let cardName2 = this.state.showing[2];

    if (imagesShowing < 3) {
      setTimeout(() => {}, 300);
      if (cardName1 === cardName2) {
        this.setState((prevState) => ({
          ...prevState,
          showing: [...prevState.showing, image.name, image.id],
          isMatching: [prevState.showing, image.name],
        }));
      } else {
        this.setState((prevState) => ({
          ...prevState,
          showing: [...prevState.showing, image.name, image.id],
        }));
      }
    } else {
      this.setState((prevState) => ({
        ...prevState,
        showing: [],
      }));
    }
  };

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
