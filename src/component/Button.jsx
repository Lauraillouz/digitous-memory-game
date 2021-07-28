import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div>
          <button className="" onClick={() => this.chooseDifficulty()}>easy</button>
          <button className="" onClick={() => this.chooseDifficulty()}>normal</button>
          <button className="" onClick={() => this.chooseDifficulty()}>Difficult</button>
          <button className="" onClick={() => this.chooseDifficulty()}>hardcore</button>
      </div>
    );
  }
}

export default Button;
