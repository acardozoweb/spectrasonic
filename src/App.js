import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
// import Nav from "./components/Nav";
import Listings from "./components/Listings";
import Signup from "./components/Signup";
import FAQ from "./pages/faq";
import Contact from "./pages/contact"
import NoMatch from "./pages/noMatch"

function App() {
  return (
    <div>
      <Router>
        <main>
          <Header></Header>
          <Switch>

          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/contact" component={Contact} />

          <Route component={NoMatch} />
          </Switch>
          {/* <Nav></Nav> */}
          <Listings></Listings>
          <Signup></Signup>
        </main>
      </Router>
    </div>
  );
}

export default App;
