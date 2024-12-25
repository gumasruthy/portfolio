// Home.jsx
import frontPic from '../assets/frontPic.jpg';
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div id="home" className="home-container">
      <header className="home-header">
        <div className="home-content">
          <div className="home-text">
            <p className="greeting">Hey, there 👋</p>
            <h1>
              I'm <span className="highlight">Uma Sruthy Gajula</span>
            </h1>
            <h2>Software Engineer in FinTech Services</h2>
            <p className="subtitle">
              I'm a Master's student in Computer Science at Virginia Tech. I bring with me 3 years of experience at Oracle, where I designed banking screens for clients like HSBC, PNB, and K-Banks across Hong Kong, Singapore, Malaysia, and Luxembourg in various capacities.
            </p>
          </div>
          <div className="home-image">
            <img
              src={frontPic} 
              alt="Uma Sruthy Gajula"
              style={{
                width: '300px',
                height: 'auto', 
                borderRadius: '8px',
              }}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;