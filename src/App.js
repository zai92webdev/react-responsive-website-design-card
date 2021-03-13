import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {

  const NotFoundPage = () => {
    return <>
      <h1>Page not found</h1>
    </>
  }

  return (
    <Router>
      <div >
      <Navbar />

      <div className="app__content">
      <Switch>
          <Home exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/terms' component={Terms} />
          <Route exact path='/privacy' component={Privacy} />

        <Route exact path="*" component={NotFoundPage} />
      </Switch>
      </div>

      <Footer />
    </div>
    </Router>
    
  );
}

export default App;
