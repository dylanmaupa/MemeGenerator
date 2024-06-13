import React from 'react'
import Navbar from './components/Navbar';
import Meme from './components/Meme';

const App = () => {
  return (
    <div className='main-container'>
      <Navbar/>
      <Meme/>
    </div>
  )
}

export default App