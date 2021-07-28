import React from "react";

class Grid extends React.Component {
  render() {
    return (
      <div className="flex">
        {this.props.images.map((image) => {
          return (
            <img
              className="card resize"
              src={image.URL}
              alt={image.name}
              key={image.id}
            ></img>
          );
        })}
      </div>
    );
  }
}

export default Grid;
