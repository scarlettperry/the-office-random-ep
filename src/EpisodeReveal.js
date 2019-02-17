import React from 'react'

const EpisodeReveal = (props) => {
  return (
    <div>
      <p>Season: {props.details["episode_season"]}</p>
      <p>Episode: {props.details["episode_number"]}</p>
      <p>Title: {props.details["episode_name"]}</p>
    </div>
  )
}

export default EpisodeReveal
