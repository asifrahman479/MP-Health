import '../App.css';
import React, {Component} from 'react';
import Header from './headerfiles/header';
import{Inject,ScheduleComponent, Day,Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';

export default class DoctorView extends Component {
  render(){
    return (        
      <div className="App">
        <Header />
        <h1>Doctor</h1>
        <center>
        <ScheduleComponent width = '100%' height = '700px' currentView = 'Week'>
          <Inject services = {[Day,Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent>
        </center>
      </div>
    );
  }
}

