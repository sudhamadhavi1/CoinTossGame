// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, ishead: 1}

  headOrtail = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    const {total, heads, tails} = this.state

    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        total: prevState.total + 1,
        ishead: 1,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        total: prevState.total + 1,
        ishead: 0,
      }))
    }
  }

  render() {
    const {total, heads, tails, ishead} = this.state
    const imageUrl = ishead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    console.log(imageUrl)

    return (
      <div className="app-container">
        <div className="white-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <div className="image-container">
            <img src={imageUrl} className="coin-image" alt="toss result" />
          </div>
          <button type="button" onClick={this.headOrtail}>
            Toss Coin
          </button>
          <p>Total: {total}</p>
          <p>Heads: {heads}</p>
          <p>Tails:{tails}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss
