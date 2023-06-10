import './index.css'

const FaqItem = props => {
  const {faqItem, onPlusOrMinusIcon, idsList} = props
  const {id, questionText, answerText} = faqItem
  const onPlusMinus = () => {
    onPlusOrMinusIcon(id)
  }
  const isAnswerTextNeeded = idsList.includes(id)
  const isPlusOrMinusImage = isAnswerTextNeeded
    ? [
        'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png',
        'minus',
      ]
    : [
        'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png',
        'plus',
      ]

  return (
    <li className="faq-item">
      <div className="faq-question-item">
        <h1 className="question-text">{questionText}</h1>
        <div>
          <button className="button" type="submit" onClick={onPlusMinus}>
            <img
              src={isPlusOrMinusImage[0]}
              className="plus-minus-image"
              alt={isPlusOrMinusImage[1]}
            />
          </button>
        </div>
      </div>
      {isAnswerTextNeeded ? (
        <div className="faq-answer-item">
          <hr className="horizontal-rule" />
          <p className="answer-text">{answerText}</p>
        </div>
      ) : (
        ''
      )}
    </li>
  )
}

export default FaqItem
