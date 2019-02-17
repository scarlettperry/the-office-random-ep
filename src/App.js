import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Button from './Button.js'
import EpisodeReveal from './EpisodeReveal.js'

const API_KEY = process.env.THE_MOVIE_DB_API


// const API_KEY = process.env.REACT_APP_GOOGLE_API


class App extends Component {

  constructor(){
    super()
    this.state={
      office_ep: ["Threat Level Midnight", "Casino Night", "Beach Day", "Moraccan Christmas", "Diversity Training", "Local Ad", "Weight Loss Training: Part 1", "The Merger"],
      episode: ""
    }
  }

  componentDidMount(){

    fetch(`https://api.themoviedb.org/3/tv/2316/season/1/episode/1?api_key=${API_KEY}&language=en-US`)
      .then(resp=>resp.json())
      .then(console.log)
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
