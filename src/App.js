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

  componentDidMount() {
    this.shuffleDeck();
  }

  componentDidUpdate() {
    if (this.state.shouldCheckCard) {
      this.checkCard();
    }
    console.log(this.state.deck);
  }

  // Methods
  shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
    return deck;
  }

  shuffleDeck = () => {
    const shuffled = this.shuffle(this.state.deck);
    this.setState((prevState) => {
      console.log("prevState", prevState);
      return {
        ...prevState,
        deck: shuffled,
      };
    });
  };

  handleclick() {
    this.setState((prevState) => {
      return {
        ...prevState,
        isPlaying: true,
      };
    });
  }

  clickCard = (image) => {
    if (this.state.canClick) {
      this.setState((prevState) => {
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
        {this.state.matchingCards.length === 10 ? (
          <div>
            <h1>GameOver</h1>
            <Button onClick={() => this.handleclick()} />
          </div>
        ) : this.state.isPlaying ? (
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
