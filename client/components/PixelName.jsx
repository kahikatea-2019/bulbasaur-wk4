import React from 'react'

import PixelLetter from './PixelLetter.jsx'

class PixelName extends React.Component {
  state = {
    string: this.props.string
  }

  componentDidUpdate (prevProps) {
    if (this.props.string !== prevProps.string) {
      this.setState({
        string: this.props.string
      })
    }
  }

  render () {
    const pixelLetterArr = this.state.string.split('').map((letter, i) => {
      return <PixelLetter key={i} letter={letter} />
    })
    return (
      <div className="pixel-name">
        {pixelLetterArr}
      </div>
    )
  }
}

export default PixelName
