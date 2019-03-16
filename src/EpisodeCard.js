import React from 'react'

const EpisodeCard = (props) => {
  return (
    <div>
      <p>{props.details["episode_name"]}</p>
      <p>Season {props.details["episode_season"]} Episode {props.details["episode_number"]}</p>
      <p>Description:{props.details["episode_overview"]}</p>
    </div>
  )
}

export default EpisodeCard
