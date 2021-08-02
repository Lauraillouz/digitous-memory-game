import React from "react";
// Components
import Button from "./component/Button";
import GameOver from "./component/GameOver";
import Grid from "./component/Grid";

// CSS
import "./App.css";

// Import json
import deck from "./images.json";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      deck: deck,
      isPlaying: false,
      isclicked: null,
      showingCards: [],
      checkingCards: null,
      matchingCards: null,
      overlay: "overlay",
    };
  }

  componentDidUpdate() {
    console.log(this.state.showingCards);
    console.log(this.state.matchingCards);
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

  // Tentative gestion d'overlay
  setOverlay = () => {
    if (!this.state.showingCards || !this.state.matchingCards) {
      return this.state.overlay;
    }
  };

  clickCard = (card) => {
    let imagesShowing = this.state.showingCards.length;
    let cardName1 = this.state.showingCards[0];
    let cardName2 = this.state.showingCards[2];

    if (imagesShowing < 3) {
      if (cardName1 === cardName2 && imagesShowing === 2) {
        this.setState((prevState) => ({
          ...prevState,
          matchingCards: [prevState.showingCards, card.name],
        }));
      } else {
        this.setState((prevState) => ({
          ...prevState,
          showingCards: [...prevState.showingCards, card.name, card.id],
        }));
      }
    } else {
      this.setState((prevState) => ({
        ...prevState,
        showingCards: [],
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
        {this.state.isPlaying ? (
          <Grid
            deck={this.state.deck}
            clickCard={this.clickCard}
            showingCards={this.state.showingCards}
            matchingCards={this.state.matchingCards}
          />
        ) : (
          <Button onClick={() => this.handleclick()} />
        )}
      </div>
    );
  }
}

export default App;
