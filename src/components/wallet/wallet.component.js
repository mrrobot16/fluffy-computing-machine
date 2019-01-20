import React, { Component } from 'react'
import { BottomNavBarComponent } from '../'
import './wallet.component'
export class WalletComponent extends Component {
  copyBTCAddress(){
    console.log('Copying BTC Address...');
  }
  render(){
    return(
      <div className="wallet">
        <div className="current-balance">
          <p>Your current balance</p>
          <div className="btc-amount">
            <img src="https://i.imgur.com/a7rkEBx.png" alt="btc-logo"/>
            <p>1.32 <span>BTC</span></p>
          </div>
          <div className="usd-amount">
            <p>$4,890.00 USD</p>
          </div>
        </div>
        <div className="btc-address">
          <p>Bitcoin Address</p>
          <p>3NvaSE2x5UFouqiqx2kSyfkTPrm1J5QFER</p>
          <button className="copy-address" onClick={this.copyBTCAddress}>Copy Address</button>
        </div>
        <div className="bottom-navbar">
          <BottomNavBarComponent/>
        </div>
      </div>
    )
  }
}
