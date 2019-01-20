import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class DonateComponent extends Component {
  sendDonation(){
    console.log('Sending Donation...');
  }
  render(){
    return (
      <div className="donate">
        <input type="number" placeholder="1.00 BTC"/>
        <p>$3,750.49 USD</p>
        <button onClick={this.sendDonation}><Link to="/success">Make Donation</Link></button>
      </div>
    )
  }
}
