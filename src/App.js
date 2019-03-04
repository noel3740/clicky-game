import React, { Component } from 'react';
import MainHeader from './components/MainHeader'
import Card from './components/Card'
import './App.css';
import logo from './logo.png'

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    message: ""
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
    if (!this.imagesSelected.includes(imageUrl)) {
      this.imagesSelected.push(imageUrl);

      if (this.imagesSelected.length === this.images.length) {
        this.imagesSelected = [];
        this.setState(state => ({
          topScore: this.images.length,
          score: 0,
          message: "You won!"
        }));
      } else {
        this.setState(state => ({
          message: "You guessed correctly!",
          score: state.score + 1
        }));
      }
    } else {
      this.imagesSelected = [];
      this.setState(state => ({
        topScore: state.score > state.topScore ? state.score : state.topScore,
        score: 0,
        message: "You guessed incorrectly!"
      }));
    }

    //Randomize the images
    this.images = this.images.sort( () => Math.random() - 0.5);
  };

  render() {

    return (
      <div className="App">

        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper black">
              <div className="row">
                <div className="col s12 m4 left-align myNavItem">
                  <a href="#!" className="vgmNavLogo valign-wrapper"><img src={logo} alt="logo"></img> VGM</a>
                </div>
                <div className="col s12 m4 center-align myNavItem">
                  <h5 style={this.state.message.includes("incorrectly") ? {color: "red"} : this.state.message.includes(" won")  ? {color: "green"} : {}}>{this.state.message}</h5>
                </div>
                <div className="col s12 m4 right-align myNavItem">
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
