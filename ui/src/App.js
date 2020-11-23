import './App.css';
import ReactCalender from './components/ReactCalender';
import React, {Component} from 'react';
import Header from './components/headerfiles/header';
import{Inject,ScheduleComponent, Day,Week, WorkWeek, Month, Agenda, EventSettingsModel} from '@syncfusion/ej2-react-schedule';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DoctorView from './components/DoctorView';
import PatientView from './components/PatientView';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/doctor' component={DoctorView} />
            <Route path='/patient' component={PatientView} />
          </Switch>
        </div>

      </Router>        
      
    );
  }
}

const Home = () => (
  <div>
    <h1> Home page </h1>
  </div>
)

export default App;
