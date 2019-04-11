import React from 'react'

import Pixel from './Pixel'

import letterArrays from '../../lettersData'

class PixelLetter extends React.Component {
  componentDidMount () {
    console.log(this.pixelArray)
  }

  pixelArray = letterArrays.A.map((arr, i) => {
    return arr.map((pixel, j) => {
      let color = '#adff9e'
      if (pixel) { color = '#f82035' }
      return <Pixel key={j} style = {{ backgroundColor: color }}/>
    })
  })

  render () {
    return (
      <div className="pixel-name">
        {this.pixelArray}
      </div>
    )
  }
}

export default PixelLetter
