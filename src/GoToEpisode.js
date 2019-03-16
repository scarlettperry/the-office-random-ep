import React from 'react'

const GoToEpisode = (props) => {
  // console.log(props);
  return(
    <div>
      <button className="give-random-ep-bttn" onClick={props.randomEpClick}>Give Me An Episode!</button>
    </div>
  )
}

export default GoToEpisode
