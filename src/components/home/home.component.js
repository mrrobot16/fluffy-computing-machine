import React, { Component } from 'react'
export class HomeComponent extends Component {
  render() {
    // LANDING PAGE Component
    return (
      <div className="home-component">
        <header className="home-header">
          <h5 className="font-weight-bolder text-right text-wrap mx-4 my-2">Log In</h5>
        </header>
        <div className="container">
            <div className="row">

              <div className="col-md my-3">
                <img src="https://picsum.photos/375/227" width="375" height="227"></img>
              </div>

              <div className="col-md my-3">
                <button type="button" className="btn btn-light">Light</button>
              </div>

              <div className="col-md my-3">
                <div className="text-wrap">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                </div>
              </div>

              <div className="col-md my-2">
                <button type="button" className="btn btn-light">I'm a donar</button>
              </div>

              <div className="col-md my-3">
                <button type="button" className="btn btn-light">I'm a non-profit</button>
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
