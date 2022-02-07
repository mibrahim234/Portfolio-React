import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



// Components and pages 
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from './components/About';
import Projects from './components/projects';
import Resume from './components/Resume';


function App() {

  return (
    <Router>
    <div className="app">
      <Header />
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/companies" component={Companies} />
          <Route exact path="/developers" component={Developers} />

          <Route component={NoMatch} />
        </Switch> */}
     
      <Footer />
    </div>
  </Router>
  );
}

export default App;
