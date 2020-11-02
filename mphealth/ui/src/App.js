import './App.css';
import ReactCalender from './components/ReactCalender';
import React, {Component} from 'react';
import Header from './components/headerfiles/header';

class App extends Component {
  render(){
  return (
    
    
    <div className="App">
      <Header />
      <center>
      <ReactCalender />
      </center>
      
    </div>
    
  );
}
}

export default App;
