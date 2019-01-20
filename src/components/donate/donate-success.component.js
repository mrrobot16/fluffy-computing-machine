import React, { Component } from 'react'
import { BottomNavBarComponent } from '../'
const charityLogo = 'https://i.imgur.com/liZ55ZP.png'
export class DonateSuccessComponent extends Component {
  render(){
    return (
      <div className="donate-success">
        <div className="charity-funded">
          <img src={charityLogo} alt="charityLogo"/>
          <p>Donation successful!</p>
          <p>You donated 1.00 BTC ($3,750 USD) to <span><strong>The Salvation Army</strong></span></p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus non sagittis dolor.
             Nullam eros eros, dictum vel interdum ac, euismod id leo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus non sagittis dolor.
             Nullam eros eros, dictum vel interdum ac, euismod id leo.
          </p>
        </div>
        <div class="bottom-navbar">
          <BottomNavBarComponent/>
        </div>
      </div>
    )
  }
}
