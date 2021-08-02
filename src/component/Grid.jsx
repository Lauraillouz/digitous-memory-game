import React from "react";

class Grid extends React.Component {

  many (){
    {this.props.images.map((image) => {
      return <img src={image.URL} alt={image.name} key={image.id}></img>
    })}
  }
  render() {
    return (
      <div>
        many ()
        
      </div>
    );
  }key
}

export default Grid;
