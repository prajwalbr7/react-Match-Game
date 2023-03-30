import './MatchGame.css'
import {Component} from 'react'

class MatchGame extends Component {
  render() {
    const {score, time} = this.props
    return (
      <nav className="nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-game-logo"
        />
        <ul className="score-clock-container">
          <li className="score-container1">
            <p className="score-para">Score:</p>
            <h1 className="score-heading">{score}</h1>
          </li>
          <li className="score-container2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="clock-img-size"
            />
            <p className="score-heading">{time} sec</p>
          </li>
        </ul>
      </nav>
    )
  }
}
export default MatchGame
