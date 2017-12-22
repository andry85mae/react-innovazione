import * as React from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';

import { Home } from './Components/Home/Home';
import {CarList} from './Components/CarList/CarList'
import {CarDetails} from './Components/CarDetails/CarDetails'
import { Calendar} from './Components/Calendar/Calendar'
import {RentForm} from './Components/RentForm/RentForm'

import * as $ from 'jquery';

// const logo = require('./logo.svg');

class App extends React.Component {

  ShowLink(event: any) {
    $('#leftside-navigation ul ul').slideUp();
    $(this).next().is(':visible') || $(this).next().slideDown();
    event.stopPropagation();
  }

  render() {
    return (

      <HashRouter>
        <div className="container-fluid">
        <div className="row">
        <nav className="main-menu">
            <ul>
                <li>
                <NavLink exact to="/">
                        <i className="fa fa-home fa-2x" />
                        <span className="nav-text">
                            Home
                        </span>
                </NavLink>
                  
                </li>
                <li className="has-subnav">
                <NavLink exact to="/CarList">
                        <i className="fa fa-car fa-2x" />
                        <span className="nav-text">
                           Cars
                        </span>
                    </NavLink> 
                </li>
                <li className="has-subnav">
                    <a href="#">
                       <i className="fa fa-info fa-2x" />
                        <span className="nav-text">
                            Contacts
                        </span>
                    </a>
                    
                </li>
                <li>
                   <a href="#">
                        <i className="fa fa-map-marker fa-2x" />
                        <span className="nav-text">
                            Maps
                        </span>
                    </a>
                </li>

            </ul>

            <ul className="logout">
                <li>
                   <a href="#">
                         <i className="fa fa-power-off fa-2x" />
                        <span className="nav-text">
                            Login
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
            <main id="wrap" className="col-sm-12 ml-sm-auto col-md-12 pt-3" role="main">
              
              <div className="App">
                <div>
                  <div className="content">
                        <Route exact path="/" component={Home} />

                        <Route path="/CarList" component={CarList} />

                        <Route path="/CarDetails/:Id" component={CarDetails} />

                        <Route path="/Calendar" component={Calendar} />

                        <Route path="/RentCar" component={RentForm} />
                  </div>
                </div>
              </div>
            </main>
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
