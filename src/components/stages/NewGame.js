import React from 'react'
import '../../assets/stylesheets/new_game.scss'
import { Animated } from "react-animated-css";

class NewGame extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      content_center_visible: true
    }
    this.first_anim = React.createRef()
    this.second_anim = React.createRef()
    this.button = React.createRef()
  }

  handleNewGameClick = () => {

    const first_tri_anim = this.first_anim.current
    const second_tri_anim = this.second_anim.current
    const button = this.button.current

    button.disabled = true
    first_tri_anim.beginElement();
    setTimeout(() => {
      second_tri_anim.beginElement();
      setTimeout(() => {
        setTimeout(() => {
          this.setState({
            content_center_visible: false
          }, () => {
            setTimeout(() => {
              this.props.setStage(1)
            }, 500)
          })
        }, 150)
      }, 150)
    }, 150)

  }

  render() {
    return (
      <div className="card new-game">
        <svg height="500" width="800" className="background-triangle-first">
          <polygon points="0,500 800,500 0,0">
            <animate
              ref={this.first_anim}
              begin="indefinite" attributeName="points"
              dur="250ms" to="0,500 0,500 0,300"
              fill="freeze" />
          </polygon>
        </svg>
        <svg height="280" width="500" className="background-triangle-second">
          <polygon points="500,0 500,280 120,280" fill="#ca4234">
            <animate
              ref={this.second_anim}
              begin="indefinite"
              attributeName="points"
              dur="350ms"
              to="500,0 500,280 500,280"
              fill="freeze" />
          </polygon>


        </svg>
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
          <Animated animationIn="bounceInUp" animationOut="bounceOutDown" isVisible={this.state.content_center_visible}>
            <div className="center-content d-flex flex-column align-items-center">
              <h1 className="title mb-4">The Hanger</h1>
              <button ref={this.button} className="btn btn-lg btn-danger rounded-pill" onClick={() => this.handleNewGameClick()}>NEW GAME</button>
            </div>
          </Animated>
        </div>
      </div>
    )
  }
}

export default NewGame