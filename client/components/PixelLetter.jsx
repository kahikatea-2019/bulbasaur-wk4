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
    const pixelArray = letterArrays[this.state.letter.toUpperCase()].map((arr, i) => {
      return arr.map((pixel, j) => {
        let color = ''
        if (pixel) { color = '#f82035' }
        return <Pixel key={j} style = {{ backgroundColor: color }}/>
      })
    })
    return (
      <div className="pixel-letter">
        {pixelArray}
      </div>
    )
  }
}

export default PixelLetter
