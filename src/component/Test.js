import React from "react";
import images from "../images.json";

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      images: images,
      randomImages: [],
      matchedImages: [],
      clickedImages: [],
    };
    this.start();
  }

  handleClick(name, index) {
    if (this.state.clickedImages.length === 2) {
      setTimeout(() => {
        this.checkCard();
      }, 300);
    } else {
      let image = { name, index };
      let matchedImages = this.state.matchedImages;
      let images = this.state.images;
      matchedImages[index].close = false;
      images.push(image);
      this.setState({
        clickedImages: images,
        matchedImages: matchedImages,
      });
      if (this.state.clickedImages.length === 2) {
        setTimeout(() => {
          this.checkCard();
        }, 300);
      }
    }
  }

  checkCard() {
    let matchedImages = this.state.matchedImages;
    if (
      (this.state.clickedImages[0].name === this.state.clickedImages[1]).name
    ) {
      matchedImages[this.state.clickedImages[0].index].complete = true;
      matchedImages[this.state.clickedImages[1].index].complete = true;
    } else {
      matchedImages[this.state.clickedImages[0].index].close = true;
      matchedImages[this.state.clickedImages[1].index].close = true;
    }
    this.setState({
      matchedImages,
      clickedImages: [],
    });
  }
}

export default Test;
