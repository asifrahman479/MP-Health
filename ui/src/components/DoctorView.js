
import React, {Component} from 'react';
import Header from './headerfiles/header';
import{Inject,ScheduleComponent, Day,Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';
import {DoctorData} from "./SidebarData.js";
import {Link } from "react-router-dom";

export default class DoctorView extends Component {
  render(){
    return (        
      <div style={{backgroundColor: '#E5E5E5'}}>
        {/* <Header /> */}
        <div className="sidenav">
          {DoctorData.map((item, index) => {
            return (
              <li key={index} 
                  className={item.cName}>
                    <Link to={item.path}>{item.title}</Link>
              </li>
              )
          })
          }
          </div>
        
          <div className="calender">
            <ScheduleComponent style={{float: 'right', backgroundColor: 'E5E5E5', border: 'none', paddingTop: '5%' }} width = '80%' height = '100%' currentView = 'Week'>
                <Inject services = {[Day,Week, WorkWeek, Month, Agenda]}/>
              </ScheduleComponent>
          </div>
      </div>
    );
  }
}

