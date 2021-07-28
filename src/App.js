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
    return showImages;
  };

  render() {
    return (
      <div>
        <h1>Memory Card</h1>
        <Grid images={this.state.images} getImages={this.getImages} />
        <Button />
        {/* <GameOver /> */}
        
      </div>
    );
  }
}

export default App;
