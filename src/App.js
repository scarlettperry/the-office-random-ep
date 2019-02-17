import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Button from './Button.js'
import EpisodeReveal from './EpisodeReveal.js'

class App extends Component {
  constructor(){
    super()
    this.state={
      office_ep: ["Threat Level Midnight", "Casino Night", "Beach Day", "Moraccan Christmas", "Diversity Training", "Local Ad", "Weight Loss Training: Part 1", "The Merger"],
      episode: ""
    }
  }

  randomEpClick = () => {
    let episodeCollection = this.state["office_ep"]
    this.setState({
      episode: episodeCollection[Math.floor(Math.random() * episodeCollection.length)]
    })
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Button
        randomEpClick={this.randomEpClick}
      />
      <EpisodeReveal episode={this.state.episode}/>
      </div>
    );
  }


}

export default App;
