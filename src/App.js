import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import OurPricing from './Components/Pricing/Pricing';
import MyTeam from './Components/Team/Team';
import CustomerFeedback from './Components/FeedBack/FeedBack';
import LoginForm from './Components/LoginForm/LoginForm';
import RegForm from './Components/RegForm/RegForm';


const App = (props) => {
  return (
    <>
    <Router>
      <Header/>
      <Switch>     
        <Route exact path='/start-it-front' component={HomePage}/>
        <Route path="start-it-front/pricing" component={OurPricing}/>
        <Route path="start-it-front/team" component={MyTeam}/>
        <Route exact path="start-it-front/feedback" component={CustomerFeedback}/>
        <Route path="start-it-front/dashboard" />
        <Route path="start-it-front/login"component={LoginForm}/>
        <Route path="start-it-front/join" component={RegForm}/> 
      </Switch>       
      <Footer/>      
    </Router>
    </>
  );
}

export default App;