import '../App.css';
// import ReactCalender from './ReactCalender.js';
import React, {Component} from 'react';
import Header from './headerfiles/header';
import{Inject,ScheduleComponent, Day,Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';

export default class PatientView extends Component {
  render(){
    return (        
      <div className="App">
        <Header />
        <h1>Patient</h1>
        <center>
        <ScheduleComponent width = '100%' height = '700px' currentView = 'Week'>
          <Inject services = {[Day,Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent>
        </center>
      </div>
    );
  }
}


