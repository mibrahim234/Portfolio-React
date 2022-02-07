import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



// Pages 
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

  return (
    <Router>
    <div className="app">
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
          
          <Route component={NoMatch} />
        </Switch>
     
      <Footer />
    </div>
  </Router>
  );
}

export default App;
