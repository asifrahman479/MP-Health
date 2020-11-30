import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const PatientData = [
  {
    title: "Dashboard",
    path: "/home",
    icon: <h1>D</h1>,
    sub: [],
    cName: 'nav-text'
  },
  {
    title: "Appointments",
    path: "/",
    icon: <h1>A </h1>,
    cName: 'nav-text',
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
    sub: [],
    cName: 'nav-text'
  }
];

export const DoctorData = [
  {
    title: "Dashboard",
    path: "/home",
    icon: <h1>D</h1>,
    sub: [],
    cName: 'nav-text'
  },
  {
    title: "Appointments",
    path: "/",
    icon: <h1>A </h1>,
    cName: 'nav-text',
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
    title: "Patient",
    path: "/patient",
    icon: <h1>P</h1>,
    sub: [],
    cName: 'nav-text'
  }
];