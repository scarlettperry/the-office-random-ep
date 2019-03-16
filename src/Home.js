import React from 'react'
import Header from './Header.js'
import {Link} from 'react-router-dom'

const Home = (props) => {
  // console.log(props);
  return(
    <div>
    <Header />
    <Link to="/random-ep">
      <button>Random Episode Generator</button>
    </Link>
    <Link to="/chore-wheel">
      <button>Chore Wheel</button>
    </Link>
    </div>
  )
}

export default Home
