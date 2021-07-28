import React from "react";

// Components
import Button from "./component/Button";
import GameOver from "./component/GameOver";
import Grid from "./component/Grid";

// Import json
import images from "./images.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      images: images,
    };
  }

  getImages = () => {
    const imagesInfo = this.state.images;
    const showImages = imagesInfo.map((image) => <div>{image.URL}</div>);
    console.log("clic");
    return showImages;
  };

  render() {
    return (
      <div>
        <h1>Memory Card</h1>

        <Button onClick={() => this.getImages()} />
        {/* <GameOver /> */}
      </div>
    );
  }
}

export default App;
