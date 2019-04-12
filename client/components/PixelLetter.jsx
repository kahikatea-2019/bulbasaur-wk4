import React from 'react'

import Pixel from './Pixel'

import letterArrays from '../../lettersData'

class PixelLetter extends React.Component {
  state = {
    letter: this.props.letter
  }

  random = this.props.random

  componentDidUpdate (prevProps) {
    if (this.props.letter !== prevProps.letter) {
      this.setState({
        letter: this.props.letter
      })
    }
  }

  randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  render () {
    let pixelArray = []
    if (letterArrays[this.state.letter.toUpperCase()] !== undefined) {
      pixelArray = letterArrays[this.state.letter.toUpperCase()].map((arr, i) => {
        return arr.map((pixel, j) => {
          let color = ''
          if (pixel && this.random) {
            color = this.randomHexColor()
          } else if (pixel) {
            color = '#fae529'
          }
          return <Pixel key={j} style = {{ backgroundColor: color }}/>
        })
      })
      return (
        <div className="pixel-letter">
          {pixelArray}
        </div>
      )
    }
    return []
  }
}

export default PixelLetter
