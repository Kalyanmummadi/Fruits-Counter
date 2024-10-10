// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  eat = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state

    return (
      <div className="container">
        <div className="container2">
          <h1 className="heading">
            Bob ate <span className="count1">{count1}</span> mangoes
            <span className="count2"> {count2}</span> bananas
          </h1>
          <div className="fruits-container">
            <img
              className="image"
              alt="mango"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            />
            <img
              className="image"
              alt="banana"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            />
          </div>
          <div className="button-container">
            <button onClick={this.eat} type="button" className="button1">
              Eat Mango
            </button>
            <button onClick={this.eatBanana} type="button" className="button1">
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
