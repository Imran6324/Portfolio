import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Skills from './components/pages/skills/Skills';
import Experiences from './components/pages/experiences/Experiences';
import Educations from './components/pages/educations/Educations';
import Portfolios from './components/pages/portfolios/Portfolios';
import Details from './components/pages/details/Details';
import Details1 from './components/pages/details1/Details1';
import Details2 from './components/pages/details2/Details2';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/skills" component={Skills} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/educations" component={Educations} />
          <Route path="/portfolios" component={Portfolios} />
          <Route path="/details" component={Details} />
          <Route path="/details1" component={Details1} />
          <Route path="/details2" component={Details2} />
          

        </Switch>
      </>
    </Router>
  );
}

export default App;
