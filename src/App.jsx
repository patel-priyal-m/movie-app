import { useEffect, useState } from 'react'

import './App.css'
import Search from './components/Search'


const App = () => {
  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="HeroImage" className="hero-image" />
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
        </header>
        </div>
      <Search />
    </main>

  )
}


export default App
