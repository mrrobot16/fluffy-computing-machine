import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import charities from '../../assets/icons/charities.svg'
import wallet from '../../assets/icons/wallet.svg'
import activity from '../../assets/icons/activity.svg'
export class BottomNavBarComponent extends Component {
  render(){
    return (
      <div className="bottom-navbar-buttons">
        <div className="bottom-button">
          <img src={charities} alt="icons"/>
          <button className="charities">
            <Link to="/donor">Charities</Link>
          </button>
        </div>
        <div className="bottom-button">
          <img src={wallet} alt="icons"/>
          <button className="wallet">
            <Link to="/wallet">Wallet</Link>
          </button>
        </div>
        <div className="bottom-button">
          <img src={activity} alt="icons"/>
          <button className="activity">
            <Link to="/activity">Activity</Link>
          </button>
        </div>
      </div>
    )
  }
}
