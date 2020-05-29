import React from 'react';

import NewGame from '../stages/NewGame'
import PlayGame from '../stages/PlayGame'

import 'bootstrap/dist/js/bootstrap'
import 'jquery/dist/jquery'
import 'popper.js/dist/popper'
import '../../assets/stylesheets/application.scss'
import '../../assets/stylesheets/hanger.scss'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      game_stage: 0
    }
  }

  setStage = (value) => {
    this.setState({
      game_stage: value
    })
  }

  render() {
    const stage = this.state.game_stage

    return (
      <div className="hanger">
        <div className="container">
          <div className="row">
            <div className="col">
              {
                stage === 0 ? <NewGame setStage={this.setStage} /> : null
              }
              {
                stage === 1 ? < PlayGame /> : null
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
