import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{display:"flex",border:"1px solid white",borderRadius:'8px',color:'white',padding:"5vh",justifyContent:"space-evenly"}}>
      <Link to="/overview">Overview</Link>
      <Link to="/location">Location</Link>
      <Link to="/audience">Audience explorer</Link>
      <Link to="/exhibitor">Exhibitor leads</Link>
      <Link to="/traffic">Traffic Flow</Link>
    </nav>
  )
}

export default Navbar
