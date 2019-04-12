import React from 'react'
import PokeName from './PokeName'

const App = () => {
  return (
    <React.Fragment>
      <h1>Poke-name!</h1>
      <PokeName />
      <div className=''>
        <img className='spinner' src='https://i.pinimg.com/originals/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5.png' />
      </div>
    </React.Fragment>

  )
}

export default App
