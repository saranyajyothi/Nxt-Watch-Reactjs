import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {bal: 2000}

  cashBtn = value => {
    this.setState(previousBal => ({
      bal: previousBal.bal - value,
    }))
  }

  render() {
    const {bal} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile">
            <div className="profile-pic">
              <h1 className="letter">S</h1>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balnce">
            <p className="bal">Your Balance</p>
            <div>
              <p className="amount">{bal}</p>
              <p className="bal">In rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="amount">Withdraw</p>
            <p className="bal">CHOOSE SUM (IN RUPEES)</p>
            <ul className="box-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  key={eachItem.id}
                  cash={eachItem}
                  cashBtn={this.cashBtn}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
