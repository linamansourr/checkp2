import React from 'react';
import './App.css';
import imag from './srcpic.svg';



function App() {
  return (
    <div className="App">
     <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">Lina Mansour</h1>
    <br />
    <img src="/imgp/imageInPublic.jpg" alt="pic" />
    <br />
    <img src={imag} alt ="pics"></img> 
  </div>
  <div className="vid">
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
  </div>
    </div>
  );
}

export default App;
