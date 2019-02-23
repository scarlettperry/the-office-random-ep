import React from 'react'

const Button = (props) => {
  // console.log(props);
  return(
    <div>
      <button className="give-random-ep-bttn" onClick={props.randomEpClick}>Give Me An Episode!</button>
    </div>
  )
}

export default Button
