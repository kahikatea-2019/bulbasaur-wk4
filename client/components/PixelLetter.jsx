import React from 'react'

import Pixel from './Pixel'

import letterArrays from '../../lettersData'

class PixelLetter extends React.Component {
  state = {
    letter: this.props.letter
  }

  componentDidUpdate (prevProps) {
    if (this.props.letter !== prevProps.letter) {
      this.setState({
        letter: this.props.letter
      })
    }
  }

  render () {
    let pixelArray = []
    if (letterArrays[this.state.letter.toUpperCase()] !== undefined) {
      pixelArray = letterArrays[this.state.letter.toUpperCase()].map((arr, i) => {
        return arr.map((pixel, j) => {
          let color = ''
          if (pixel) { color = '#fae529' }
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
