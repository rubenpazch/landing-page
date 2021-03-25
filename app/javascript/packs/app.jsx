import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import RestaurantList from './components/restaurantsList'
import RestaurantDetail from './components/restaurantDetail'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/restaurantdetail/:id">
          <RestaurantDetail />
        </Route>
        <Route path="/">
          <RestaurantList/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;