import './App.css';
import ReactCalender from './components/ReactCalender';
import React, {Component} from 'react';
import Header from './components/headerfiles/header';
import{Inject,ScheduleComponent, Day,Week, WorkWeek, Month, Agenda, EventSettingsModel} from '@syncfusion/ej2-react-schedule';

class App extends Component {
  render(){
  return (
    
    
    <div className="App">
      <Header />
      <center>
      <ScheduleComponent width = '100%' height = '600px' currentView = 'Week'>
        <Inject services = {[Day,Week, WorkWeek, Month, Agenda]}/>
      </ScheduleComponent>
      </center>
      
    </div>
    
  );
}
}

export default App;
