import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { faUsers, faUserMd, faClock, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PatientData = [
  // {
  //   title: "Set Availibility",
  //   path: "/",
  //   icon: <h1>D</h1>,
  //   sub: [],
  //   cName: 'nav-text'
  // },
  // {
  //   title: "Appointments",
  //   path: "/",
  //   icon: <h1>A </h1>,
  //   cName: 'nav-text',
  //   sub: [
  //     {
  //       name: "day",
  //       path: "/"
  //     },
  //     {
  //       name: "week",
  //       path: "/"
  //     },
  //     {
  //       name: "month",
  //       path: "/"
  //     }
  //   ]
  // },
  {
    title: "Available doctors",
    path: "/doctor",
    icon: <FontAwesomeIcon icon={faUserMd} />,
    sub: [],
    cName: 'nav-text'
  }
];

export const DoctorData = [
  {
    title: "Set Availibility",
    path: "/",
    icon: <FontAwesomeIcon icon={faClock} />,
    sub: [],
    cName: 'nav-text'
  },
  {
    title: "Appointments",
    path: "/",
    icon: <FontAwesomeIcon icon={faCalendar} />,
    cName: 'nav-text',
    // sub: [
    //   {
    //     name: "day",
    //     path: "/"
    //   },
    //   {
    //     name: "week",
    //     path: "/"
    //   },
    //   {
    //     name: "month",
    //     path: "/"
    //   }
    // ]
  },
  {
    title: "Patient",
    path: "/patient",
    icon: <FontAwesomeIcon icon={faUsers} />,
    sub: [],
    cName: 'nav-text'
  }
];