import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './Home.js'
import GenerateEpisode from './GenerateEpisode.js'
import ChoreWheel from './ChoreWheel.js'

const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_API

class App extends Component {

  constructor(){
    super()
    this.state={
      episode_number: "",
      episode_season: "",
      episode_name: "",
      episode_overview: ""
    }
  }

  randomEpClick = () => {
    let num = Array.from({length: 9}, (v, k) => k+1)
    let season_num = num[Math.floor(Math.random() * num.length)]

    let episode_num
    let random_episode_num

    if (season_num === 1) {
      episode_num = Array.from({length: 6}, (v, k) => k+1)
      random_episode_num = episode_num[Math.floor(Math.random() * episode_num.length)]
    }
    else if (season_num === 2) {
      episode_num = Array.from({length: 22}, (v, k) => k+1)
      random_episode_num = episode_num[Math.floor(Math.random() * episode_num.length)]
    }
    else if (season_num === 3 || season_num === 9) {
      episode_num = Array.from({length: 25}, (v, k) => k+1)
      random_episode_num = episode_num[Math.floor(Math.random() * episode_num.length)]
    }
    else if (season_num === 4) {
      episode_num = Array.from({length: 19}, (v, k) => k+1)
      random_episode_num = episode_num[Math.floor(Math.random() * episode_num.length)]
    }
    else if (season_num === 5) {
      episode_num = Array.from({length: 28}, (v, k) => k+1)
      random_episode_num = episode_num[Math.floor(Math.random() * episode_num.length)]
    }
    else if (season_num === 6 || season_num === 7) {
      episode_num = Array.from({length: 26}, (v, k) => k+1)
      random_episode_num = episode_num[Math.floor(Math.random() * episode_num.length)]
    }
    else if (season_num === 8) {
      episode_num = Array.from({length: 24}, (v, k) => k+1)
      random_episode_num = episode_num[Math.floor(Math.random() * episode_num.length)]
    }
    else {
      random_episode_num = 1
    }

    fetch(`https://api.themoviedb.org/3/tv/2316/season/${season_num}/episode/${random_episode_num}?api_key=${API_KEY}&language=en-US`)
      .then(resp => resp.json())
      .then(data => this.setState({
        episode_number: data["episode_number"],
        episode_season: data["season_number"],
        episode_name: data["name"],
        episode_overview: data["overview"]
      }))
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="App">
            <Route exact path = "/" render = {Home} />
            <Route exact path = "/random-ep" render={
              routerProps=>
                <GenerateEpisode
                  {...routerProps}
                  randomEpClick={this.randomEpClick}
                  details={this.state}
                />
            }/>
            <Route exact path = "/chore-wheel" render = {ChoreWheel} />
          </div>
        </React.Fragment>
      </Router>
    )
  }

}

export default App;
