import React, {Component} from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom'; 
import Home from './Home';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import Post from './Post';


class JEPortfolio extends Component {
    render() {
        return(          
           
            <Router> 
                 <div>
                        <Navbar />     
                        <Route  exact path='/'  component={Home}  /> 
                        <Route  path='/App1'  component={App1}  /> 
                        <Route  path='/App2'  component={App2}  /> 
                        <Route  path='/App3'  component={App3}  /> 
                        <Route  path='/App4'  component={App4}  /> 
                        <Route  path= "/:post_id" component={Post} />                    
                  
                 </div>
                </Router>                
        )
    }
}


export default JEPortfolio;