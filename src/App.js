import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CommonRoutes from "./routing/Common-routes"
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path='/user' component={null}/>
              <Route path='/' component={CommonRoutes}/>
              <Route path='*' component={null}/>
          </Switch>
      </Router>
    </div>
    
  );
}

export default App;
