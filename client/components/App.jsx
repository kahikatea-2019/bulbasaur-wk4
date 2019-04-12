import React from 'react'
import PokeName from './PokeName'
import { Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <React.Fragment>
      <h1>Poke-name!</h1>
      <Route exact path='/' component={PokeName} />
      <Route exact path='/random' render={() => <PokeName random={true} />} />
      <div className=''>
        <img className='spinner' src='https://i.pinimg.com/originals/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5.png' />
      </div>

    </React.Fragment>

  )
}

export default App
