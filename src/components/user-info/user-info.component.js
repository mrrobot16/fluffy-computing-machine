import React, { Component } from 'react'
export class UserInfoComponent extends Component {
  render(){
    return(
      <div className="d-flex ml-auto navbar-text align-items-center px-2">
        <img className="pr-1" height="15" src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt=""/>
        <strong className="d-inline btc-amount">2.32</strong>
        <span className="d-inline usd-amount">($8,594)</span>
      </div>
    )
  }
}
