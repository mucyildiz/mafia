import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Axios from 'axios';

import Login from './pages/Login';
import Oops from './pages/Oops';
import LandingPage from './pages/LandingPage';
import Game from './pages/Game';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  // UseEffect happens once page is mounted
  useEffect(() => {
    // Get user info (will be null if user is not authenticated)
    Axios.get('/api/userInfo').then((data) => {
      setAuthenticated(data.data);
    })
  }, [])

  // Check if user is authenticated
  if(!isAuthenticated) {
    return <Login />
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={(props) => <LandingPage isAuthenticated={isAuthenticated}/>} />
        <Route exact path ='/game/:id' component={Game} />

        <Route component={Oops} />
      </Switch>
    </Router>
  );
}

export default App;
