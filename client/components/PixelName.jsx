import React from 'react'

import PixelLetter from './PixelLetter.jsx'

class PixelName extends React.Component {
  stringArr = this.props.string.split('')

  pixelLetterArr = this.stringArr.map((letter, i) => {
    return <PixelLetter key={i} letter={letter} />
  })

  componentDidMount () {
    console.log(this.stringArr)
  }

  render () {
    return (
      <div className="pixel-name">
        {this.pixelLetterArr}
      </div>
    )
  }
}

export default PixelName
