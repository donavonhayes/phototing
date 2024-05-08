// AboutPage.js
import React from 'react';

const About = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
    <div style={{ flex: '1', textAlign: 'right', marginRight: '50px' }}>
        <img src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/441383027_10221970055514886_1578824059436832814_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fbOLFmQBFUYQ7kNvgH7ZNuk&_nc_ht=scontent-ord5-1.xx&oh=00_AfCa5wxJvu9ehKvXmMV-kLIBUdu7ppL3z1gnRzms6JQKfQ&oe=6641ABB6" alt="About Us" style={{ width: '300px', height: '300px', }} />
      </div>
      <div>
        <h2>About Shutter Fields Photography</h2>
        <p>
          Welcome to Shutter Fields Photography! We are passionate about capturing beautiful moments and creating lasting memories.
          
        </p>
      </div>
    </div>
  );
};

export default About;
