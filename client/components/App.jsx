import React from 'react'
import PokeName from './PokeName'
import { Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <React.Fragment>
      <h1>Poke-name!</h1>
      <Route exact path='/' component={PokeName} />
      <Route exact path='/random' render={() => <PokeName random={true} />} />
    </React.Fragment>
  )
}

export default App
