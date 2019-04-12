import React from 'react'

import PixelName from './PixelName'

class PokeName extends React.Component {
  state = {
    output: 'The quick brown-fox jumps over the lazy dog '
  }

  getPokeNames = () => {
    return {
      'pokenames': [ 'Bulb', 'Char', 'Squir', 'Blas', 'Pika', 'Zu', 'Jiggly', 'Seel', 'Mew', 'Turt', 'Karp', 'Poke', 'Dude', 'Dactyl', 'Poreon', 'Mander', 'Weed', 'Rina', 'Sect', 'Dabra', 'Cool', 'Torb', 'Whirl', 'Fairy', 'Rina', 'Meleon'
      ]
    }
  }

  pokeName = event => {
    let poketags = this.getPokeNames().pokenames
    const length = poketags.length
    let randomNum = Math.floor(Math.random() * length)
    let randomName = event.target.value + '-' + poketags[randomNum]

    if (event.target.value === '') {
      this.setState({
        output: 'Your name here'
      })
    } else {
      this.setState({
        output: randomName
      })
    }
  }

  componentDidMount () {
    // console.log(this.state.output)
  }

  render () {
    return (
      <React.Fragment>
        <h2></h2>
        <PixelName string={this.state.output}/>
        <br />
        <label htmlFor="newNameAdd">Enter your name:</label>
        <input type='string' onChange={this.pokeName}/>
      </React.Fragment>

    )
  }
}

export default PokeName
