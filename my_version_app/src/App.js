import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navtabs from './Components/Navtabs/Navtabs';
import Rating from './Components/Rating/Rating';
import MyTeam from './Components/Team/Team';
import RegForm from './Components/RegForm/RegForm';
import LoginForm from './Components/LoginForm/LoginForm';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Pricing from './Components/Pricing/Pricing';




function Feedback() {
  return (
    <div>
      <Navtabs />
      <Rating />
    </div>
  );
}

function Team() {
  return (
    <div>
      <MyTeam />
    </div>
  );
}

function Signin() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
function Signup() {
  return (
    <div>
      <RegForm />
    </div>
  );
}


export default function App() {
  return (
    <>
    <Router>           
        <Header/>
        <Switch>
          <Route exact path="/start-it-front" render={ () => <Home />}/>
          <Route exact path="/start-it-front/join" component={Signup}/>           
          <Route exact path="/start-it-front/login" component={Signin}/>            
          <Route exact path="/start-it-front/feedback" component={Feedback}/>            
          <Route exact path="/start-it-front/team" component={Team}/>
          <Route exact path="/start-it-front/pricing" render={ () => <Pricing />}/>          
        </Switch>
        <Footer />
    </Router>
    </>
  );
}
