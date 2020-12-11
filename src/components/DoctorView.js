import React from 'react';
import Header from './headerfiles/header';
import{Inject,ScheduleComponent, Day,Week, WorkWeek, Month, Agenda, DragAndDrop} from '@syncfusion/ej2-react-schedule';
import {DoctorData} from "./SidebarData.js";
import {Link } from "react-router-dom";
import { SampleBase } from "./sample-base";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";


export default class DoctorView extends SampleBase {
  constructor() {
    super(...arguments);
    this.dataManger = new DataManager({
      url: "http://mphealth.herokuapp.com/api/Appointment/",
      crudUrl: "http://mphealth.herokuapp.com/api/Appointment/",
        // "https://ej2services.syncfusion.com/production/web-services/api/Schedule",
      adaptor: new WebApiAdaptor(),
      crossDomain: true
    });

    this.state = {
      appointmentsList: []
    }
  }

 
  // onPopupOpen(args) {
  //   if (args.type === 'QuickInfo') {
  //     // let statusElement = args.element.querySelector("#EventType");
  //     // statusElement.setAttribute("name", "EventType");
  //     args.cancel = true;
  //     // alert('You can use your customized popup here for quick info popup.');
  //   }
  // } 
  
  editorTemplate(props) {
    return props !== undefined ? (
      <table
        className="custom-event-editor"
        style={{ width: "100%", cellpadding: "5" }}
      >
        <tbody>
          <tr>
            <td className="e-textlabel">Name</td>
            <td colSpan={4}>
              <input
                id="Summary"
                className="e-field e-input"
                type="text"
                name="Subject"
                // value={Subject}
                style={{ width: "100%" }}
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Type of Visit</td>
            <td colSpan={4}>
              <DropDownListComponent
                id="EventType"
                placeholder="Choose Type"
                data-name="EventType"
                className="e-field"
                style={{ width: "100%" }}
                dataSource={["Sick", "Emergency", "Check-Up"]}
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
            <td className="e-textlabel">Reason for visit</td>
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
                // value={{Description}}
              />
            </td>
          </tr>
        </tbody>
      </table>
    ) : (
      <div />
    );
  }
  onEventRendered(args) {
    var categoryColor = args.data.CategoryColor;
    args.element.style.backgroundColor = categoryColor;
    
}

  async componentDidMount() {
    try {
      // fetching the data from api, before the page loaded
      const res = await fetch('http://mphealth.herokuapp.com/api/Appointment'); 
        const appointmentsList = await res.json();
        this.setState({
          appointmentsList
      });
      console.log(appointmentsList);

    } catch {
      console.log("hello");
    }
      
  }

  hello() {
    return (
      <h3>Appointments</h3>
    )
  }

  render(){
    return (        
      <div style={{backgroundColor: '#edf1f4'}}>
        <Header />
        <div className="sidenav">
          {DoctorData.map((item, index) => {
            return (
              <li key={index} 
                  className={item.cName}>
                    <Link to={item.path}>{item.icon}<span>{item.title}</span>
                      </Link>
              </li>
              )
          })
          }

            {this.state.appointmentsList.map(item => (
               (
                <li className={item.cName}>
                      <h3 id="items">- {item.Subject}</h3>
                </li>
              )
            ))}

          </div>
          <div className="hello">
            <h1>Appointments</h1>
          </div>
          <div className="calender">
          
            <ScheduleComponent editorTemplate={this.editorTemplate.bind(this)} style={{float: 'right', backgroundColor: 'E5E5E5', border: 'none', paddingTop: '1%' }} width = '80%' height = '100%' currentView = 'Week' eventSettings={{ dataSource: this.dataManger }}>
                <Inject services = {[Day,Week, WorkWeek, Month, Agenda, DragAndDrop]}/>
              </ScheduleComponent>
          </div>
      </div>
    );
  }
}