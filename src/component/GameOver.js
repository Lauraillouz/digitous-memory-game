import React from "react";

class GameOver extends React.Component {

  



  render() {
  

     return (
      <div>
        <h1>GameOver</h1>
        <div>
           <p className="">point:</p> 
           <p className="">time:</p>
        </div>
           <button className="" onClick={() => this.replay()}>replay</button> 
      </div>
    );
  }
}

export default GameOver;
