import React from "react";
import Button from "./Button";

class GameOver extends React.Component {

  render() {
  

     return (
      <div>
        <h1>GameOver</h1>
        <div>
           <p className="">point:</p> 
           <p className="">time:</p>
        </div>
           <Button onClick={() => this.replay()}>replay</Button> 
      </div>
    );
  }
}

export default GameOver;
