import React from 'react'
import Hanger from '../hanger/Hanger'


class PlayGame extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card">
        <Hanger />
      </div>


    )
  }
}

export default PlayGame