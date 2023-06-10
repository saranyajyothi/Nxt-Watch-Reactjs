import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClicked: true}

  onClickEmoji = () => {
    this.setState({isClicked: false})
  }

  feedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div>
        <h1>How satisfied are you with our customer support performance ?</h1>
        <ul className="un-ordered-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                onClick={this.onClickEmoji}
                className="button-size"
              >
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="image-style"
                />
                <br />
                <span>{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankyou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thank-you-card-container">
        <div>
          <img src={loveEmojiUrl} alt="love emoji" />
        </div>
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performence
        </p>
      </div>
    )
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          {isClicked ? this.feedback() : this.thankyou()}
        </div>
      </div>
    )
  }
}

export default Feedback
