import React from 'react'

class PokeName extends React.Component {
  state = {
    output: 'Your Poke Name will appear hear 👂'
  }

  getPokeNames = () => {
    return {
      'pokenames': [ 'Bulb', 'Char', 'Squir', 'Blas', 'Pika', 'Zu', 'Jiggly', 'Seel', 'Mew', 'Turt', 'war', 
      ]
    }
  }

  pokeName = event => {
    let poketags = this.getPokeNames()
    poketags = poketags.pokenames
    const length = poketags.length
    console.log(length)
    
    let randomNum = Math.floor(Math.random() * length)
    let randomName = event.target.value + "-" + poketags[randomNum]

    this.setState({
      output: randomName
    })
  }

  render () {
    return (
      <React.Fragment>
        <h2>Name:</h2>
        <div>{this.state.output}</div>
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
