import React, { Component } from 'react'
export class UserInfoComponent extends Component {
  render(){
    return(
      <div className="user-info">
        <div className="welcome-message">Welcome back, EmpoweredUser</div>
        <div className="wallet-balance">
          <div className="btc-amount">2.32 BTC</div>
          <div className="usd-amount">$8,594 USD</div>
        </div>
      </div>
    )
  }
}
