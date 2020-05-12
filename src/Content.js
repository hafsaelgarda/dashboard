import React, { Component} from 'react';
import 'react-calendar/dist/Calendar.css';
import './Content.css';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import calend from './calend';
import fil from './fil';
import profil from './profil';
import school from './school';






export default class Content extends Component {
  
  
    render() {


        return (

          <Router basename="/">
            <Route path="/calend" component={calend}></Route> 
            <Route path="/fil" component={fil}></Route> 
            <Route path="/profil" component={profil}></Route> 
            <Route path="/school" component={school}></Route> 

            </Router>
       
        )
    }
}
