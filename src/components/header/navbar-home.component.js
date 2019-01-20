import React, { Component } from 'react'

export class NavbarHomeComponent extends Component {
  render(){
    return(
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="ml-auto">
            <button className="btn btn-small btn-outline-light">
              Login
            </button>
          </div>
        </nav>
      </header>
    )
  }
}
