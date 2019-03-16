import React from 'react'
import headerImage from './images/the_office_header.png'

const Header = () => {
  return (
    <div>
      <img className="office-img" src={headerImage} alt="the office"/>
    </div>
  )
}

export default Header
