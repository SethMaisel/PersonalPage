import React from 'react';
import ProfilePic from './pictures.png/ProfilePic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ProfilePic} className="profile-pic" alt="pic" />
        <p>
          Seth Maisel Puissant Portfolio and Prolific Profile Page
        </p>
        
      </header>
    </div>
  );
}

export default App;
