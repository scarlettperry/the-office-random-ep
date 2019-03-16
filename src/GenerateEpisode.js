import React from 'react'
import logoImage from './images/the_office_logo.jpg'
import EpisodeCard from './EpisodeCard.js'


const GenerateEpisode = (props) => {
  return(
    <div>
      <img className="office-img" src={logoImage} alt="the office"/>
      <button className="give-random-ep-bttn" onClick={props.randomEpClick}>Give Me An Episode!</button>
      <EpisodeCard details={props.details}/>
    </div>
  )
}

export default GenerateEpisode
