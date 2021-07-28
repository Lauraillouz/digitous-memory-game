import React from "react";

// Components
import Button from "./component/Button";
import GameOver from "./component/GameOver";
import Grid from "./component/Grid";
import Css from './App.css';

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

  
  showGrid(){
    return <Grid />
  }

  render() {
    return (
 
      <div className= "container">
        <div className="head">
          <h1>Memory Card</h1>
          <span>by Classy glassy</span>
        </div>        
        <Button onClick={(showGrid) => {
    return <Grid />
  }} />
        {/* <GameOver /> */}
        
      </div>
    );
  }
}

export default App;
