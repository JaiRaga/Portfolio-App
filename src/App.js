import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./component/Navbar";
import Drawer from "./component/Drawer";
import Home from "./component/Home";
import Projects from "./component/Projects";
import About from "./component/About";
import Certifications from "./component/Certifications";
import Resume from "./component/Resume";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Drawer />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/project' component={Projects} />
          <Route exact path='/about' component={About} />
          <Route exact path='/certificates' component={Certifications} />
          <Route exact path='/contact' component={Resume} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
