import React from "react";


// Keys
import { v4 as uuid } from "uuid";

class Grid extends React.Component {
  constructor() {
    super();
     const deck = this.props.images
    .concat(this.props.images)
    .sort(() => Math.random() - 0.5) 
    .map(face => { 
      return {
        content: face,  
        reveal: false,  
      }
    }) 
    this.state = {
      showing: [],
      showingNames: [],
      isMatching: [],
      deck: "",
      firstCard: null,
      match: false,
    };
  }

 clickCard = (imageId, imageName) => {
  let imagesShowing = this.state.showing.length;
    if (imagesShowing < 2) {
      this.setState((prevState) => ({
        ...prevState,
        showing: [...prevState.showing, imageId],
        showingNames: [...prevState.showingNames, imageName],
      }));
    } else {
      if (this.state.showingNames[0] === this.state.showingNames[1]) {
        this.setState((prevState) => ({
          ...prevState,
          isMatching: [...prevState, prevState.showingNames],
        }));
      } else {
        this.setState((prevState) => ({
          ...prevState,
          showing: [],
          showingNames: [],
        }));
      }
    }
  };

  
  render() {
    return (
      <div className="flex restrict">
        {this.props.images.sort(() => Math.random() - 0.5).map((image) => {
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
