import './Sidebar.css';

import React, {Component} from 'react';
import Header from './headerfiles/header';
import{Inject,ScheduleComponent, Day,Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';
import {PatientData} from "./SidebarData.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SampleBase } from "./sample-base";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

export default class PatientView extends Component {
  constructor() {
    super(...arguments);
    this.dataManger = new DataManager({
      url: "http://127.0.0.1:8000/api/Appointment/?format=json",
      crudUrl: "http://127.0.0.1:8000/api/Appointment/",
        // "https://ej2services.syncfusion.com/production/web-services/api/Schedule",
      adaptor: new WebApiAdaptor(),
      crossDomain: true,
      IsBlock: true
    });
  }
  onPopupOpen(args) {
    if (args.type === 'QuickInfo') {
      // let statusElement = args.element.querySelector("#EventType");
      // statusElement.setAttribute("name", "EventType");
      args.cancel = true;
      // alert('You can use your customized popup here for quick info popup.');
    }
  }
  editorTemplate(props) {
    return props !== undefined ? (
      <table
        className="custom-event-editor"
        style={{ width: "100%", cellpadding: "5" }}
      >
        <tbody>
          <tr>
            <td className="e-textlabel">Subject</td>
            <td colSpan={4}>
              <input
                id="Summary"
                className="e-field e-input"
                type="text"
                name="Subject"
                style={{ width: "100%" }}
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Status</td>
            <td colSpan={4}>
              <DropDownListComponent
                id="EventType"
                placeholder="Choose status"
                data-name="EventType"
                className="e-field"
                style={{ width: "100%" }}
                dataSource={["New", "Requested", "Confirmed"]}
                value={props.EventType || null}
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">From</td>
            <td colSpan={4}>
              <DateTimePickerComponent
                format="dd/MM/yy hh:mm a"
                id="StartTime"
                data-name="StartTime"
                value={new Date(props.startTime || props.StartTime)}
                className="e-field"
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">To</td>
            <td colSpan={4}>
              <DateTimePickerComponent
                format="dd/MM/yy hh:mm a"
                id="EndTime"
                data-name="EndTime"
                value={new Date(props.endTime || props.EndTime)}
                className="e-field"
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Reason</td>
            <td colSpan={4}>
              <textarea
                id="Description"
                className="e-field e-input"
                name="Description"
                rows={3}
                cols={50}
                style={{
                  width: "100%",
                  height: "60px !important",
                  resize: "vertical"
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    ) : (
      <div />
    );
  }
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
        <ScheduleComponent  editorTemplate={this.editorTemplate.bind(this)} popupOpen={this.onPopupOpen.bind(this)} style={{float: 'right', backgroundColor: 'E5E5E5', border: 'none', paddingTop: '5%' }} width = '80%' height = '100%' currentView = 'Week' eventSettings={{ dataSource: this.dataManger }}>
                <Inject services = {[Day,Week, WorkWeek, Month, Agenda]}/>
              </ScheduleComponent>
        </div>
      </div>
    );
  }
}


