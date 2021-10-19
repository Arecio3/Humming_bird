import './App.css';
import Home from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Navbar'
import ContactSection from './components/ContactSection';
function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/contact" component={ContactSection} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
