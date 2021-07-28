import React from "react";

// Keys
import { v4 as uuid } from "uuid";

class Grid extends React.Component {
  constructor() {
    super();
    this.state = {
      showing: [],
      isShowing: false,
    };
  }

  clickCard = (imageId) => {
    if (this.state.showing.length < 2) {
      this.setState((prevState) => ({
        ...prevState,
        showing: [...prevState.showing, imageId],
      }));
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
            <div className="wrap margin">
              <img
                className="card resize margin"
                src={image.URL}
                alt={image.name}
                key={uuid()}
                isShowing={this.state.isShowing}
              ></img>
              <div
                onClick={() => this.clickCard(image.id)}
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
