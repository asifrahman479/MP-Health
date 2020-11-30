import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DoctorView from "./DoctorView";
import PatientView from "./PatientView";

const routes = [
  {
    title: "Dashboard",
    path: "/patient",
    icon: <h1>D</h1>,
    sub: []
  },
  {
    title: "Appointments",
    path: "/home",
    icon: <h1>A </h1>,
    sub: [
      {
        name: "day",
        path: "/"
      },
      {
        name: "week",
        path: "/"
      },
      {
        name: "month",
        path: "/"
      }
    ]
  },
  {
    title: "Doctor",
    path: "/doctor",
    icon: <h1>D</h1>,
    sub: []
  }
];
export default class Sidebar extends Component {
  render() {
    return (
      <Router>
        <div style={{ display: "flex" }}>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            <li>
              <Link to="/patient">Dashboard</Link>
            </li>
            <li>
              <Link to="/home">Appointments</Link>
            </li>
            <li>
              <Link to="/doctor">doctor</Link>
            </li>
          </ul>

          {/* <Switch>
              <Route path='/' component={PatientView} />
              <Route path='/home' />
              <Route path='/' component={DoctorView} />
          </Switch> */}



          {/* {routes.map((route) => (
            <Route key={route.path} path={route.path} exact={route.exact} component={route.title} />
          ))} */}
        </div>
      </Router>
    );
  }
}
