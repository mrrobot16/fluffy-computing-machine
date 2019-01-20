import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes/app.routes'

// Styles
import './styles/App.scss'

// JS
import 'bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="app-component">
            <AppRouter/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
