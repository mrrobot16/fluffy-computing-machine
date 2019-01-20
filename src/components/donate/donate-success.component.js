import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const charityLogo = 'https://i.imgur.com/liZ55ZP.png'
export class DonateSuccessComponent extends Component {
  render(){
    return (
      <div className="donate-success">
        <div className="charity-funded">
          <img src={charityLogo} alt="charityLogo"/>
          <p>Donation successful!</p>
          <p>You donated 1.00 BTC ($3,750 USD) to<span><strong>The Salvation Army</strong></span></p>
          <p></p>
        </div>
        <Link to="/donor">Go to Dashboard</Link>
      </div>
    )
  }
}
