import React from 'react'
import {Link} from 'react-router-dom'

const Home = (props) => {
  // console.log(props);
  return(
    <div>
    <Link to="/random-ep">
      <button>Give Me An Episode!</button>
    </Link>
    <Link to="/chore-wheel">
      <button>Spin the chore wheel!</button>
    </Link>
    </div>
  )
}

export default Home
