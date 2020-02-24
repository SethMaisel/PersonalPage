import React from 'react';
import profilecard from './components/profilecard'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profilecard} className="profile-pic" alt="pic" />
        <p>
          Seth Maisel Puissant Portfolio and Prolific Profile Page
        </p>
        
      </header>
    </div>
  );
}

export default App;
