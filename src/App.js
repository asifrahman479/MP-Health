import './App.css';
import React, {Component} from 'react';
// import Header from './components/headerfiles/header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DoctorView from './components/DoctorView';
import PatientView from './components/PatientView';
import TempDoctor from './components/TempDoctor';
import { Link } from 'react-router-dom';
import { Login } from "./components/Login/index";


class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={PatientView} />
            <Route path='/doctor' component={DoctorView} />
            <Route path='/patient' component={PatientView} />
            <Route path='/temp' component={TempDoctor} />
            <Route path='/signup' component={Home} />
          </Switch>
        </div>

      </Router>        
      
    );
  }
}

const Home = () => (
  <div>
    <Login/>
  </div>
)

export default App;
