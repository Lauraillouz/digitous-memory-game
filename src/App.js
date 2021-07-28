import React from "react";
import Button from "./component/Button";
import GameOver from "./component/GameOver";
import Grid from "./component/Grid";
import Css from './App.css';

class App extends React.Component {
  render() {
    return (
      <div className= "container">
        <div className="head">
          <h1>Memory Card</h1>
          <span>by Classy glassy</span>
        </div>
        <Button />
      </div>
    );
  }
}

export default App;
