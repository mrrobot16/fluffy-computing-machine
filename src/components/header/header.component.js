import React, { Component } from 'react'
import { UserInfoComponent } from '../'
import logo from '../../logo.svg'
import './header.component.css'
export class HeaderComponent extends Component {
  render(){
    return (
      <div className="header">
        <img className="logo" src={logo} alt="logo"/>
        <UserInfoComponent/>
      </div>
    )
  }
}
