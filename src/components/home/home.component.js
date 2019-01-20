import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AgoraIcon } from '../shared/agora-icon.component'
import { NavbarHomeComponent } from '../header/navbar-home.component'

export class HomeComponent extends Component {
  render() {
    // LANDING PAGE Component
    return (
      <div className="home-component">
      <NavbarHomeComponent/>
        <div className="container-full bg-primary text-white" style={{height: '100vh'}}>
          <div className="col-12">
            <div className="row justify-content-center align-items-center" style={{height: '50vh'}}>
              <div className="col-10 mx-4">
                <AgoraIcon style={{width: '100%'}}></AgoraIcon>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row justify-content-center align-items-center">
              <div className="col-10 my-2">
                <Link to="/donor" className="btn btn-outline-light btn-lg btn-block">I'm a donor</Link>
                <Link to="/non-profit" className="btn btn-outline-light btn-lg btn-block">I'm a non-profit</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
