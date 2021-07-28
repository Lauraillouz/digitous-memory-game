import React from "react";
import Button from "./component/Button";
import GameOver from "./component/GameOver";
import Grid from "./component/Grid";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      images: [],
    };
  }

  getImages = () => {};

  render() {
    return (
      <div>
        <h1>Memory Card</h1>
        <Grid images={this.state.images} />
        <Button />
      </div>
    );
  }
}

export default App;
