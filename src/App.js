import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'


const App = () => (
  <Router>
    <div className="content">
      <Routes />
    </div>
  </Router>
)

export default App
