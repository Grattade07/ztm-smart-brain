import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ParticlesBg from "particles-bg";

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      imageURL: "",
      box: {},
    };
  }

  onInputChange = (event) => {
    const newInputVal = event.target.value;
    this.setState({ input: newInputVal });
  };

  onSubmit = () => {
    this.setState({ imageURL: this.state.input }, () => {
      // Your PAT (Personal Access Token) can be found in the portal under Authentification
      const PAT = "94281f5ee47a47abb94fc6f9679f1d60";
      // Specify the correct user_id/app_id pairings
      // Since you're making inferences outside your app's scope
      const USER_ID = "grattade_07";
      const APP_ID = "ztm_test";
      // Change these to whatever model and image URL you want to use
      const MODEL_ID = "face-detection";

      const IMAGE_URL = this.state.imageURL;

      const raw = JSON.stringify({
        user_app_id: {
          user_id: USER_ID,
          app_id: APP_ID,
        },
        inputs: [
          {
            data: {
              image: {
                url: IMAGE_URL,
              },
            },
          },
        ],
      });

      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Key " + PAT,
        },
        body: raw,
      };

      fetch(
        "https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    });
  };

  render() {
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onSubmit}
        />
        <FaceRecognition imageURL={this.state.imageURL} />
      </div>
    );
  }
}

export default App;
