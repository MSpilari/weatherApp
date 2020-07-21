import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/home/index'
import WeatherApp from './components/main/index'
function App() {
  return (
    <div>
      <Router>
        <Home />
        <WeatherApp />
      </Router>
    </div>
  );
}

export default App;
