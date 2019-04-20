import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { 
  FaFacebook, 
  FaGithub,
  FaTwitterSquare,
  FaInstagram,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaGamepad,
  FaFutbol,
  FaBook,
  FaCat,
  FaHeadphonesAlt
} from 'react-icons/fa';

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
          <p>I like to solve problem and learn new things.</p>
          <p>And I like to share knowledge when I learn new things</p>
          <p>I am happy when I develop and maintain some products that can solve real problem.</p>
          <div className="title">Technical Skills</div>
          <p>JavaScript</p>
          <div className="star">
            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
          </div>
          <p>HTML/CSS</p>
          <div className="star">
            <FaStar/><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/>
          </div>
          <p>C#</p>
          <div className="star">
            <FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/>
          </div>
          <p>VB.net</p>
          <div className="star">
            <FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/>
          </div>
          <p>Python</p>
          <div className="star">
            <FaStar/><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/>
          </div>
          <br/>
          <div className="title">Language Skills</div>
          <p>Thai (Native)</p>
          <div className="star">
            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
          </div>
          <p>English</p>
          <div className="star">
            <FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/>
          </div>
        </div>
        <div className="app-right">
          <div className="title">Experience</div>
          <div className="exHeader">
            <h2 className="exTitle">Sansiri</h2><p className="exTime">March 2018 - March 2019</p>
          </div>
          <ul>
            <li className="exListItem">Develop web application with C#, VB.net and NodeJS.</li>
            <li className="exListItem">Database with SQL.</li>
          </ul>
          <div className="title">Education</div>
          <div className="exHeader">
            <h3 className="exTitle">Bachelor's Degree in Computer Engineering, Mahanakorn University of Technology</h3><p className="exTime"></p>
          </div>
          <div className="title">Interests</div>
          <br/><br/>
          <div className="iconIterests">
            <FaGamepad/>&nbsp;&nbsp;<FaFutbol/>&nbsp;&nbsp;<FaBook/>&nbsp;&nbsp;<FaCat/>&nbsp;&nbsp;<FaHeadphonesAlt/>
          </div>
        </div>       
      </div>
    );
  }
}

export default App;
