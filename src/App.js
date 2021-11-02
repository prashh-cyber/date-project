import './App.css';
import Home from './componenets/home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import all_reducer from './redux';
import Profile from './componenets/profile';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const store = createStore(all_reducer);

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <header className="App-header">
            <Router>
                <Switch>
                    <Route exact path = "/" component = {Home}> 
                    </Route>
                    <Route path= "/profile/:time" component = {Profile}>
                    </Route>
                </Switch>
            </Router>
        </header>
      </div>
    </Provider>
  );
}

export default App;
