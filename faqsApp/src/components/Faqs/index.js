// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {idsList: []}

  onPlusOrMinusIcon = id => {
    const {idsList} = this.state
    const isIdMatched = idsList.some(eachItem => eachItem === id)
    // console.log(idsList)

    if (!isIdMatched) {
      this.setState(prevState => ({
        idsList: [...prevState.idsList, id],
      }))
      return
    }
    this.setState(prevState => ({
      idsList: prevState.idsList.filter(eachItem => eachItem !== id),
    }))
  }

  render() {
    const {idsList} = this.state
    const {faqsList} = this.props

    return (
      <div className="bg-container">
        <div className="faq-body">
          <h1 className="faq-heading">FAQs</h1>
          <ul className="faq-card">
            {faqsList.map(eachItem => (
              <FaqItem
                key={eachItem.id}
                faqItem={eachItem}
                onPlusOrMinusIcon={this.onPlusOrMinusIcon}
                idsList={idsList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
