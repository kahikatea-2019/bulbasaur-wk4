import React from 'react'

import Pixel from './Pixel'

import letterArrays from '../../lettersData'

class PixelLetter extends React.Component {
  letter = this.props.letter.toUpperCase()

  pixelArray = letterArrays[this.letter].map((arr, i) => {
    return arr.map((pixel, j) => {
      let color = '#adff9e'
      if (pixel) { color = '#f82035' }
      return <Pixel key={j} style = {{ backgroundColor: color }}/>
    })
  })

  render () {
    return (
      <div className="pixel-letter">
        {this.pixelArray}
      </div>
    )
  }
}

export default PixelLetter
