import React from "react";
// Keys
import { v4 as uuid } from "uuid";

class Grid extends React.Component {
  
  
  /* 
    let checkMatchingImages = this.state.isMatching.length;
    if (
      checkMatchingImages === 2 &&
      this.state.isMatching[0] === this.state.isMatching[1]
    ) {
      this.setState((prevState) => ({
        ...prevState,
        isMatching: [...prevState.isMatching, imageName],
        showingNames: [],
      }));
    }
    console.log(this.state.isMatching);
  }; */
 
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
                key={uuid()}
              ></img>
              <div
                onClick={() => this.clickCard(image.id, image.name)}
                className={
                  this.state.showing.includes(image.id) ? "" : "overlay"
                }
                key={image.id}
              ></div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Grid;
