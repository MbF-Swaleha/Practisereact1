import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./components/Home";
import Services from "./components/Services";
import OurTeam from "./components/OurTeam";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

 class App extends Component {
  render() {
    return (
       <BrowserRouter>
       <div className="navlink">
        <Navigation/>
        <Switch>
            <Route path="/" component={Home} exact /> 
            <Route path="/Services" component={Services}/>
            <Route path="/OurTeam" component={OurTeam}/>
            <Route path="/Aboutus" component={Aboutus}/>
            <Route path="/Contactus" component={Contactus}/>
            <Route component={Error}/>
          
         </Switch>
        </div>
       </BrowserRouter>

      );
    }
  }

export default App;

