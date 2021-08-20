import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/home/home'
import Footer from './components/footer/footer';
import SignUp from './components/signUp/signup';
import Login from './components/login/login';
import Profile from './components/dashboard/profile';
import Fund_wallet from './components/fund_wallet/fund_wallet';
import Airtime from './components/airtime/airtime';
import Data from './components/data/data';
import Logout from './components/dashboard/logout';
import ScrollToTop from './components/scrollToUp/scroll';
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Switch>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
        <Route path="/fund_wallet" component={Fund_wallet}/>
        <Route path="/profile/airtime" component={Airtime}/>
        <Route path="/profile/data_sub" component={Data}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/" component={HomePage}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
