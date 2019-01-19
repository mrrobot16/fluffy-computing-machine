import React, { Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { AppRouter } from './routes/app.routes'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="app-component">
            <AppRouter/>
              <div className="nav-links">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/donor">Donor</Link>
                  </li>
                  <li>
                    <Link to="/non-profit">Non Profit</Link>
                  </li>
                  <li>
                    <Link to="/supplier">Suppier</Link>
                  </li>
                  <li>
                    <Link to="/donate">Donate</Link>
                  </li>
                  <li>
                    <Link to="/purchase">Purchase</Link>
                  </li>
                </ul>
              </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
