import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { FaFacebook, FaGithub,FaTwitterSquare,FaInstagram } from 'react-icons/fa';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-left">
          <img 
            className="image" 
            alt="profile"
            src="https://www.newschool.edu/uploadedImages/Parsons/Profiles/New_Profiles_Feb/00_Derek_Porter_1440x960.jpg"
          />
          <h1>Aphizit Athichokudomchai</h1>
          <h2>Fullstack Developer</h2>
          <div className="contract">
            Email : gotenya@hotmail.com<br/>
            Address : Thailand, Bangkok
          </div>
          <h1><FaGithub /><FaFacebook/><FaTwitterSquare/><FaInstagram/></h1>
          <div className="title">Profile</div>
          <div className="title">Technical Skills</div>
          <div className="title">Language Skills</div>
        </div>
        <div className="app-right">
          <div className="title">Experience</div>
          <div className="title">Education</div>
          <div className="title">Hobby</div>
        </div>       
      </div>
    );
  }
}

export default App;
