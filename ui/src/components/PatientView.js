import './Sidebar.css';

import React, {Component} from 'react';
import Header from './headerfiles/header';
import{Inject,ScheduleComponent, Day,Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';
import {PatientData} from "./SidebarData.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class PatientView extends Component {
  render(){
    return (  
      
      <div style={{backgroundColor: '#E5E5E5'}}>
        {/* <Header />  */}
        <div className="sidenav">
          {PatientData.map((item, index) => {
            return (
              <li key={index} 
                  className={item.cName}>
                    <Link to={item.path}>{item.title}</Link>
              </li>
              )
          })
          }
          {/*  */}
        
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


