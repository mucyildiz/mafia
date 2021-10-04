import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Login from './pages/Login';
import Oops from './pages/Oops';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        {/* Defaults route from / to /login so users have to login before continuing */}
        {/* If we want we can someday check if user was previously authenticated in last x hours/minutes
            and redirect somewhere else */}
        <Route exact path='/' render={() => {return(<Redirect to='/login' />);}} />

        <Route exact path='/login' component={Login} />

        <Route component={Oops} />
      </Switch>
    </Router>
  );
}

export default App;
