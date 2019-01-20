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
        <div className="container bg-primary text-white">
          <div className="row justify-content-center align-items-center" style={{height: '50vh'}}>
            <div className="col">
              <AgoraIcon style={{width: '100%'}}></AgoraIcon>
            </div>
          </div>
          <div className="row">
            <div className="col-md my-2">
              <button type="button" className="btn btn-light"><Link to="/donor">I'm a donor</Link></button>
            </div>
            <div className="col-md my-3">
              <button type="button" className="btn btn-light"><Link to="/non-profit">I'm a non-profit</Link></button>
            </div>
          </div>
        </div>
        <div className="container my-4 fixed-bottom">
            <div className="row">
              <div className="col">About</div>
              <div className="col">Team</div>
              <div className="col">Contact</div>
            </div>
        </div>
      </div>
    );
  }
}
