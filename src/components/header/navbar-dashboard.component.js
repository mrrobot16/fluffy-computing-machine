import React, { Component } from 'react'
import { UserInfoComponent } from '../'
import { AgoraIcon } from '../shared/agora-icon.component'

export class NavbarDashboardComponent extends Component {
  render(){
    return(
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

          <a className="navbar-brand" href="/">
            <picture className="d-block" style={{width: '90px', height: '100%'}}>
              <AgoraIcon/>
            </picture>
          </a>

          <UserInfoComponent/>

          <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
