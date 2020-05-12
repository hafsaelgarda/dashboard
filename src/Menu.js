import React, { Component } from 'react';
import user from './user.png';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
<div>
<Router basename="/">
  <aside className="main-sidebar">
    
    <section className="sidebar">
    
      <div className="user-panel">
        <div className="pull-left image">
          <img src={user} className="img-circle" alt="User" />
        </div>
        <div className="pull-left info">
          <p>EL GARDA Hafsa</p>
          <a href="#"><i className="fa fa-circle text-success" /> Online</a>
        </div>
      </div>



      {/* search form */}
      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." />
          <span className="input-group-btn">
            <button type="submit" name="search" id="search-btn" className="btn btn-flat">
              <i className="fa fa-search" />
            </button>
          </span>
        </div>
      </form>
      {/* /.search form */}




     
      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">MAIN NAVIGATION</li>
        <li className="active treeview menu-open">
          <a href="#">
            <i className="fa fa-dashboard" /> <span>Dashboard</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="#/school"><i className="fa fa-circle-o" /> Alerts et informations</a></li>
            
          </ul>

        </li>
        
        <li className="treeview">
          <a href="#">
            <i className="far fa-address-card" /> <span>Voir mon profil</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="#/profil"><i className="fa fa-circle-o" />Consulter mes informations</a></li>
            
          </ul>
        </li>


        <li className="treeview">
          <a href="#">
            <i className="fa fa-files-o" />
            <span>Télécharger le reçu</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>

          </a>
          <ul className="treeview-menu">
            <li><a href="#/reçu"><i className="fa fa-circle-o" /> Reçu de pré-inscription</a></li>
            
          </ul>
        </li>
       
      
        <li className="treeview">
          <a href="#">
            <i className="fa fa-table" />
            <span>Ré-Inscription</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
           
          </a>

          <ul className="treeview-menu">
            <li><a href="#/inscrip"><i className="fa fa-circle-o" /> Inscription</a></li>
            
          </ul>
        </li>

        <li className="treeview">
          <a href="#">
            <i className="fa fa-edit" /> <span>Choix de filière</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </a>

          <ul className="treeview-menu">
            <li><a href="#/fil"><i className="fa fa-circle-o" /> Remplir le formulaire</a></li>
            
          </ul>
        </li>

       
        <li className="treeview">
        <a href="#">
        <i className="fa fa-calendar" /><span >Calendar </span>
        <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
        </a>
        <ul className="treeview-menu">
            <li><a href="#/calend"><i className="fa fa-circle-o" /> Afficher le calendrier</a></li>
            
          </ul>
        
        </li>
      
       

        <li className="treeview">
          <a href="/calendar">
            <i className="glyphicon glyphicon-off" /> <span>Déconnexion</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </a>

          <ul className="treeview-menu">
            <li><a href="#/logout"><i className="fa fa-circle-o" /> Se déconnecter</a></li>
            
          </ul>
        </li>
       
   
                 
      </ul>
    </section>
  
  </aside>
  </Router>
</div>

        )
    }
}
