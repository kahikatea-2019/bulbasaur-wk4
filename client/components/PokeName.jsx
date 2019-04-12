import React from 'react'

import PixelName from './PixelName'

class PokeName extends React.Component {
  state = {
    output: 'Your name here'
  }

  getPokeNames = () => {
    return {
      'pokenames': [ 'Bulb', 'Char', 'Squir', 'Blas', 'Pika', 'Zu', 'Jiggly', 'Seel', 'Mew', 'Turt', 'Karp', 'Poke', 'Dude', 'Dactyl', 'Poreon', 'Mander', 'Weed', 'Rina', 'Sect', 'Dabra', 'Cool', 'Torb', 'Whirl', 'Fairy', 'Rina', 'Meleon'
      ]
    }
  }

  pokeName = event => {
    let poketags = this.getPokeNames()
    poketags = poketags.pokenames
    const length = poketags.length
    console.log(length)

    let randomNum = Math.floor(Math.random() * length)
    let randomName = event.target.value + '-' + poketags[randomNum]

    this.setState({
      output: randomName
    })
  }

  componentDidMount () {
    // console.log(this.state.output)
  }

  render () {
    return (
      <React.Fragment>
        <h2>Name:</h2>
        <div>{this.state.output}</div>
        <PixelName string={this.state.output}/>
        <br />
        <label htmlFor="newNameAdd">Name Generator: </label>
        <input name="name"
          type='string'
          onChange={this.pokeName}
          onFocus={() => console.log(`hello there`)} />
      </React.Fragment>

    )
  }
}

export default PokeName
