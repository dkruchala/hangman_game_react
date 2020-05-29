import React from 'react'
import HangerGraphics from './HangerGraphics'
import BounceLoader from "react-spinners/BarLoader"
import { Animated } from "react-animated-css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

class Hanger extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      word: [],
      user_guessed: [],
      missed_characters: [],
      reload_button: false,
      loading: true,
    }
    this.baseState = this.state
    this.footerRef = React.createRef()
  }

  componentDidMount() {
    document.addEventListener('keypress', this.keyPressDetection)
    this.getNewWord()
  }

  componentDidUpdate() {
    if (this.state.missed_characters.length === 10) {
      document.removeEventListener('keypress', this.keyPressDetection)
      this.footerRef.current.classList.add('game-over-footer')
      if (this.state.reload_button === false) {
        this.enableReload()
      }
    }

    if (this.state.word.length > 0 && this.state.word.join('') === this.state.user_guessed.join('')) {
      document.removeEventListener('keypress', this.keyPressDetection)
      this.footerRef.current.classList.add('game-won-footer')
      if (this.state.reload_button === false) {
        this.enableReload()
      }
    }
  }

  enableReload = () => {
    this.setState({
      reload_button: true
    })
  }

  keyPressDetection = (e) => {
    const word = this.state.word
    const user_guessed = this.state.user_guessed
    const missed_characters = this.state.missed_characters
    const hitted_key = e.key.toLowerCase()

    if (/[A-z]/.test(hitted_key)) {
      if (word.includes(hitted_key)) {
        word.filter((item, index) => {
          if (item === hitted_key) {
            user_guessed[index] = word[index]
          }
        })

        this.setState({
          user_guessed: user_guessed
        })

      }
      else {
        if (!missed_characters.includes(hitted_key)) {
          this.setState({
            missed_characters: [...this.state.missed_characters, hitted_key]
          })
        }
      }
    }
  }

  getNewWord = () => {
    let url = `http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=10&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let word = data[0].word.toLowerCase().split('')
        let user_guessed = word.map((char) => {
          if (char === '-') {
            return char
          }
          else {
            return null
          }
        })
        this.setState({
          word: word,
          user_guessed: user_guessed
        }, () => {
          console.log(data)
          setTimeout(() => {
            this.setState({
              loading: false
            })
          }, 2000)
        })
      })
  }

  replay = () => {
    this.setState(this.baseState, () => {
      this.getNewWord()
      document.addEventListener('keypress', this.keyPressDetection)
    })
  }

  render() {
    const missed_characters = this.state.missed_characters
    const user_word = this.state.user_guessed
    const winning_word = this.state.word
    const loading = this.state.loading

    return (

      loading ?
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} className="card-body d-flex flex-column justify-content-center align-items-center" >
          <React.Fragment>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <span className="h3"><b>Searching for a word</b></span>
              <BounceLoader
                size={150}
                color={"#ca4234"}
                loading={this.state.loading}
                width={300}
                height={10}
              />
            </div>
          </React.Fragment>
        </Animated>
        :
        <React.Fragment>
          <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
            <div className="hanger-human">
              <HangerGraphics wrong_answers={this.state.missed_characters.length} />
            </div>
          </Animated>
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <svg height="350" width="500" className="image-box">
              <polygon points="500,0 500,350 120,350" fill="#ca4234" />
            </svg>
          </Animated>
          <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
            <div className="card-header">
              <div className="row mt-3">
                <div className="col"></div>
                <div className="col description-text">
                  <b>YOU MISSED:</b><br />
                  {
                    missed_characters.map((character, index) => (
                      <div className="missed-character" key={`missed-char-${index}`}>{character}</div>
                    ))
                  }
                </div>
              </div>
            </div>
          </Animated>
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
            {
              this.state.reload_button ?
                <React.Fragment>
                  {
                    missed_characters.length >= 10 ?
                      <div className="display-4 mb-3 game-over-text">Game Over</div>
                      :
                      <div className="display-4 mb-3 game-over-text">You've won!</div>
                  }

                  <button className="btn btn-lg btn-outline-danger d-flex align-items-center justify-content-center rounded-pill restart-button" onClick={() => this.replay()}>
                    <FontAwesomeIcon icon={faRedo} className="mr-3" size="2x" />
                   PLAY AGAIN
                  </button>
                </React.Fragment>
                : null
            }
          </div>

          <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>

            <div ref={this.footerRef} className="card-footer d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex align-items-center justify-content-center">
                {
                  (missed_characters.length < 10 ? user_word : winning_word).map((char, index) => (
                    <div className="character-box d-flex align-items-center justify-content-center" key={`${index}-character`}>
                      {
                        char !== null ?
                          <div>
                            {char}
                          </div>
                          :
                          null
                      }
                    </div>
                  ))
                }
              </div>
            </div>

          </Animated>
        </React.Fragment>

    )
  }
}

export default Hanger