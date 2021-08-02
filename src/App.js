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
      showingCards: [],
      shouldCheckCard: false,
      matchingCards: [],
      canClick: true,
    };
  }

  componentDidUpdate() {
    if (this.state.shouldCheckCard) {
      this.checkCard();
    }
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

  clickCard = (image) => {
    console.log("card is clicked");
    if (this.state.canClick) {
      this.setState((prevState) => {
        console.log("prevState", prevState.showingCards);
        return {
          ...prevState,
          showingCards: [...prevState.showingCards, image.name, image.id],
          shouldCheckCard: true,
          canClick: prevState.showingCards.length === 2 ? false : true,
        };
      });
    }
  };

  checkCard = () => {
    let imagesShowing = this.state.showingCards.length;
    let cardName1 = this.state.showingCards[0];
    let cardName2 = this.state.showingCards[2];
    console.log(this.state.showingCards);

    if (imagesShowing === 4) {
      if (cardName1 === cardName2) {
        console.log("match");
        this.setState((prevState) => ({
          ...prevState,
          showingCards: [],
          matchingCards: [...prevState.matchingCards, cardName1],
          shouldCheckCard: false,
          canClick: true,
        }));
      } else {
        setTimeout(() => {
          this.setState((prevState) => ({
            ...prevState,
            showingCards: [],
            shouldCheckCard: false,
            canClick: true,
          }));
        }, 1000);
      }
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
