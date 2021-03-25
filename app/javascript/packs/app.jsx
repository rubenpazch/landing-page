import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import RestaurantList from './components/restaurantsList'
import Album from './components/theme'

function App() {
  return (
    <Router>
      <RestaurantList/>
    </Router>
  );
}

export default App;