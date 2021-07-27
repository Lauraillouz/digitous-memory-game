import React from "react";
import Button from "./component/Button";
import GameOver from "./component/GameOver";
import Grid from "./component/Grid";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Memory Card</h1>
        <Button />
      </div>
    );
  }
}

export default App;
