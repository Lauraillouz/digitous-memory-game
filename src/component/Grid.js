import React from "react";

class Grid extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="flex restrict">
        {this.props.images.map((image) => {
          return (
            <div key={image.id} className="wrap margin">
              <img
                className="card resize margin"
                src={image.URL}
                alt={image.name}
              ></img>
              <div
                onClick={() => this.flipCard(image.id)}
                className={
                  this.state.showing.includes(image.id) ? "" : "overlay"
                }
              ></div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Grid;
