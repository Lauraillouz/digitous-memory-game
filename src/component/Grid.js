import React from "react";

class Grid extends React.Component {
  render() {
    return (
      <div>
        {this.props.images.map((image) => {
          return <img src={image.URL} alt={image.name} key={image.id}></img>
        })}
        
      </div>
    );
  }
}

export default Grid;
