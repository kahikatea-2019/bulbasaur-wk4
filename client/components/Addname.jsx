import React from 'react'

class Addname  extends React.Component {
  state = {
    nameAdd: '',
    output: ''
  }


pokeName = event => {
  this.setState({
    nameAdd: event.target.value
  })
}

render () {
  return (
    <React.Fragment>
      <h2>Name:</h2>
      <div>{this.state.nameAdd}</div>
      <br />
      <label htmlFor="newNameAdd">Name Generator: </label>
      <input name="newCount"
        type='string'
        onChange={this.pokeName}
        onFocus={() => console.log(`hello there`)} />
    </React.Fragment>

  )
}}

export default Addname