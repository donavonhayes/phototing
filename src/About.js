// AboutPage.js
import React from 'react';

const About = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
    <div style={{ flex: '1', textAlign: 'right', marginRight: '50px' }}>
        <img src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/406142916_10221324391133680_718012415532186999_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=cgW6QHTVyVkAX-ozCNw&_nc_ht=scontent-ord5-1.xx&oh=00_AfAE0GfLbq4xh1-RZR1saPo5CjNxKcrrKqu3XJCjAMKXcQ&oe=65AC84B1" alt="About Us" style={{ width: '300px', height: '300px', }} />
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
