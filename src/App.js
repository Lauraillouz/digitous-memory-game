import React from "react";
import Button from "./component/Button";
import GameOver from "./component/GameOver";
import Grid from "./component/Grid";
import "./App.css";
import images from "./images.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      deck: deck,
      isplaying : false,
      isclicked : null,
      showingCards: [],
      checkingCards: [],
      matchingCards: null,
    };
  }

  componentDidUpdate(){
    this.checkCard()
  }
handleClick(){
  this.setState((prevState)=> {
    return {
      ...prevState,
      isPlaying: true,
    }
  })
}
clickCard = (image) => {
  this.setState((prevState) => ({
    ...prevState,
    showingCards : [...prevState.showingCards, image.name, image.id]
  }))
}

  checkCard = (image) => {
    let imagesShowing = this.state.showing.length;
    let cardName1 = this.state.showingCards[0];
    let cardName2 = this.state.showingCards[2];

    if (imagesShowing < 3) {
      setTimeout(()=> {}, 300);
      if (cardName1 === cardName2){
        this.setState((prevState)=> ({
          ...prevState,
          showingCards
        }))
      }
      this.setState((prevState) => ({
        ...prevState,
        showing: [...prevState.showing, imageId],
        showingNames: [...prevState.showingNames, imageName],
      }));
    } else {
      if (this.state.showingNames[0] === this.state.showingNames[1]) {
        this.setState((prevState) => ({
          ...prevState,
          isMatching: [...prevState, prevState.showingNames],
        }));
      } else {
        this.setState((prevState) => ({
          ...prevState,
          showing: [],
          showingNames: [],
        }));
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
        <div className="flex">
          {this.state.isPlaying ? (
            <Grid images={this.state.images} clickCard={this.clickCard}  showingCards={this.state.showingCards} />
          ) : (
            <Button onClick={() => this.handleclick()} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
