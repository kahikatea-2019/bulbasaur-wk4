import React from 'react'

import Pixel from './Pixel'

const pixelArray = Array.from({ length: 5 }, () => {
  return Array.from({ length: 5 }, () => <Pixel />)
})

class PixelLetter extends React.Component {
  
  componentDidMount () {
    console.log(pixelArray)
  }

  render () {
    return (
      <div className="pixel-name">
        {pixelArray}
      </div>
    )
  }
}

export default PixelLetter
