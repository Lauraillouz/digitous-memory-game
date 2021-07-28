import React from "react";

class Grid extends React.Component {
  render() {
    return (
      <div className="flex restrict">
        {this.props.images.map((image) => {
          return (
            <div className="wrap margin">
              <img
                className="card resize margin"
                src={image.URL}
                alt={image.name}
                key={image.id}
              ></img>
              <div className="overlay"></div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Grid;
