import React from "react";

// Import json
import images from "../images.json";

class Grid extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      showing: [],
      isMatching: [],
      images: images,
    };
  }

  componentDidUpdate() {
    console.log(this.state.showing);
    console.log(this.state.isMatching);
  }

  handleClick = () => {
    this.setState((prevState) => ({
      ...prevState,
      clicked: true,
    }));
  };

  clickCard = (image) => {
    let imagesShowing = this.state.showing.length;
    let cardName1 = this.state.showing[0];
    let cardName2 = this.state.showing[2];

    if (imagesShowing < 3) {
      setTimeout(() => {
        this.handleClick();
      }, 300);
      if (cardName1 === cardName2) {
        this.setState((prevState) => ({
          ...prevState,
          showing: [...prevState.showing, image.name, image.id],
          isMatching: [prevState.showing, image.name],
        }));
      } else {
        this.setState((prevState) => ({
          ...prevState,
          showing: [...prevState.showing, image.name, image.id],
        }));
      }
    } else {
      this.setState((prevState) => ({
        ...prevState,
        showing: [],
      }));
    }
  };

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
                onClick={() => this.clickCard(image)}
                className={
                  this.state.showing.includes(image.id)
                    ? `${this.state.clicked}`
                    : `overlay ${this.state.clicked}`
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
