import React from 'react'
import {Link} from 'gatsby'

const Navigation = () => {
  return (
    <nav>
    <Link  to='/' title='Home'>
    Home
    </Link>
    <Link  to='/about' title='About'>
    About
    </Link>
    <Link  to='/contact' title='Contact'>
    Contact
    </Link>
  
  </nav>
  )
}

export default Navigation 
