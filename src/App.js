import React, { Component } from 'react';
import MainHeader from './components/MainHeader'
import Card from './components/Card'
import Nav from './components/Nav'
import Modal from './components/Modal'
import './App.css';
import GiphyAPIService from './services/GiphyAPIService'

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    winGif: "",
    winGifText: ""
  };

  imagesSelected = [];
  winModal;

  //Function that will require all the images into the code
  requireAll = requireContext => {
    return requireContext.keys().map(requireContext);
  };

  //Get all images that are in the cardImages folder
  images = this.requireAll(require.context('./cardImages', false, /\.(png|jpe?g|svg)$/));

  //Function that will handle the on click when a user clicks on a card
  handleOnCardClick = imageUrl => {
    let message = "";

    //User has guessed correctly
    if (!this.imagesSelected.includes(imageUrl)) {
      this.imagesSelected.push(imageUrl);

      //User has won
      if (this.imagesSelected.length === this.images.length) {
        this.imagesSelected = [];
        message = "You won!";

        //Set the state variables
        this.setState({
          topScore: this.images.length,
          score: 0
        });

        //Display a random gif in a modal popup
        GiphyAPIService.getRandomPicture("winning")
          .then(res => {
            this.setState({
              winGif: res.data.data.image_url,
              winGifText: res.data.data.title
            }, () => {
              //Open the win modal
              this.winModal.displayModal();
            });
          });
      } 
      //User has not won but has guessed correctly
      else {
        message = "You guessed correctly!";

        //Set the state
        this.setState(state => ({
          score: state.score + 1
        }));
      }
    } 
    //User has guessed incorrectly
    else {
      this.imagesSelected = [];
      message = "You guessed incorrectly!";

      //Set the state
      this.setState(state => ({
        topScore: state.score > state.topScore ? state.score : state.topScore,
        score: 0
      }));

      window.$("#cardContainer").effect( "shake" )
    }

    //Display a toast on screen with the message of if they guessed correctly, incorrectly, or if they won
    const toastClass = message.includes("incorrectly") ? "incorrectToast" : (message.includes("won") ? "wonToast" : "correctToast");

    window.M.toast({
      html: message,
      classes: toastClass
    });

    //Randomize the images
    this.images = this.randomizeArray(this.images); //this.images.sort(() => Math.random() - 0.5);
  };

  randomizeArray = originalArray => {
    const newArray = [];
    const tempArray = [...originalArray];

    originalArray.forEach(() => {
      const randomIndex = Math.floor(Math.random() * tempArray.length);
      newArray.push(tempArray.splice(randomIndex, 1)[0]);
    });

    return newArray;
  };

  render() {

    return (
      <div className="App">

        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
        />

        <MainHeader
          mainText="Video Game Memory"
          detailText="Click on a video game image to earn points, but don't click on any more than once!"
        />

        <div id="cardContainer" className="container">
          <div className="row">

            {this.images.map(image =>
              <Card
                key={image}
                imageUrl={image}
                imageText="test"
                onClickMethod={this.handleOnCardClick} />
            )}

          </div>
        </div>

        <Modal
          id="winModal"
          header="You Won!"
          imageUrl={this.state.winGif}
          imageText={this.state.winGifText}
          ref={ref => { this.winModal = ref }} />
      </div>
    );
  }
}

export default App;
