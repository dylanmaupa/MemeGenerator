import React from 'react'
import trollFace from '../assets/Troll Face.png'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="header">
            <img src={trollFace} alt="" />
            <h2>Meme Generator</h2>
        </div>
        <p>By: dylan maupa</p>
    </div>
  )
}

export default Navbar