import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import DetailsPage from './detailsPage';
import Home from './homePage'


function App() {

  
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/art/:id" component={DetailsPage} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
