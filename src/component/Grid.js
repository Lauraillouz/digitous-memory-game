 
import React from "react";

class Grid extends React.Component {
  

  render() {
    return (
      <div className="flex restrict">
        {this.props.deck.map((image) => {
          return (
            <div key={image.id} className="wrap margin">
              <img
                className="card resize margin"
                src={image.URL}
                alt={image.name}
              ></img>
              <div
                onClick={this.props.clickCard}
                className={
                  this.props.showingCards.includes(image.id) ? "" : "overlay"
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