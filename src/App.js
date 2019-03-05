import React, { Component } from 'react';
import MainHeader from './components/MainHeader'
import Card from './components/Card'
import './App.css';
import logo from './logo.png'

class App extends Component {
  state = {
    score: 0,
    topScore: 0
  };

  imagesSelected = [];

  //Function that will require all the images into the code
  requireAll = requireContext => {
    return requireContext.keys().map(requireContext);
  };

  //Get all images that are in the cardImages folder
  images = this.requireAll(require.context('./cardImages', false, /\.(png|jpe?g|svg)$/));

  //Function that will handle the on click when a user clicks on a card
  handleOnCardClick = imageUrl => {
    let message = "";

    if (!this.imagesSelected.includes(imageUrl)) {
      this.imagesSelected.push(imageUrl);

      if (this.imagesSelected.length === this.images.length) {
        this.imagesSelected = [];
        message = "You won!";

        this.setState(state => ({
          topScore: this.images.length,
          score: 0
        }));
      } else {
        message = "You guessed correctly!";

        this.setState(state => ({
          score: state.score + 1
        }));
      }
    } else {
      this.imagesSelected = [];
      message = "You guessed incorrectly!";

      this.setState(state => ({
        topScore: state.score > state.topScore ? state.score : state.topScore,
        score: 0
      }));
    }

    //Display a toast on screen with the message of if they guessed correctlym incorrectly, or if they won
    const toastClass = message.includes("incorrectly") ? "incorrectToast" : (message.includes("won") ? "wonToast" : "correctToast");

    window.M.toast({
      html: message,
      classes: toastClass
    });

    //Randomize the images
    this.images = this.images.sort(() => Math.random() - 0.5);
  };

  render() {

    return (
      <div className="App">

        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper black">
              <div className="row">
                <div className="col s12 m6 left-align myNavItem">
                  <img className="vgmNavLogo" src={logo} alt="logo"></img> VGM
                </div>
                <div className="col s12 m6 right-align myNavItem">
                  <span>Score: {this.state.score}, </span>
                  <span>Top Score: {this.state.topScore}</span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <MainHeader
          mainText="Video Game Memory"
          detailText="Click on a video game image to earn points, but don't click on any more than once!"
        />

        <div className="container">
          <div className="row">

            {this.images.map((image, index) =>
              <Card
                cardId={index}
                key={index}
                imageUrl={image}
                imageText="test"
                onClickMethod={this.handleOnCardClick} />
            )}

          </div>
        </div>

      </div>
    );
  }
}

export default App;
