import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div>

<<<<<<< HEAD

          <button className="" >jouer</button>
=======
          <button onClick={this.props.onClick} className="">jouer</button>
>>>>>>> 32e8fcbee4b440e5bc2b28b80759f7156eceb924
          {/* <button className="" onClick={() => this.chooseDifficulty()}>normal</button>
          <button className="" onClick={() => this.chooseDifficulty()}>Difficult</button>
          <button className="" onClick={() => this.chooseDifficulty()}>hardcore</button> */}

      </div>
    );
  }
}

export default Button;
