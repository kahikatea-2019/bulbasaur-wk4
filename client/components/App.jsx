import React from 'react'
import PixelName from './PixelName'
import PokeName from './PokeName'

const string = 'stoked with that'

const App = () => {
  return (
    <React.Fragment>
      <PokeName></PokeName>
      <h1>React development has begun!</h1>
      <PixelName string={string}/>
    </React.Fragment>
  )
}

export default App
