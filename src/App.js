import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes/app.routes'
import { HeaderComponent } from './components'

// Styles
import './styles/App.scss'

// JS
import 'bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="app-component container">
            <HeaderComponent/>
            <AppRouter/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
