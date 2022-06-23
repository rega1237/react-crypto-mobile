import { Route, Switch } from 'react-router-dom';
import './App.css';
import Details from './pages/details/Details';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
