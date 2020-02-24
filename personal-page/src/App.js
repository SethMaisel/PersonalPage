import React from 'react';
import ProfileCard from './components/ProfileCard.js'
import ProjectsPage from './components/ProjectsPage.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Seth Maisel Portfolio / Profile
        </p>
        <ProfileCard />

      </header>

      <div className='col-xs-6 side-front-content'>

        <h1>Full-Stack Developer</h1>

        <p>I have an instinct for the user experience and want to bring my creative flair to the world of coding.</p>

        <p>Graduate of the Flatiron School Software Develpment Boot Camp. Ruby on Rails, JavaScript, React</p>
        
        <p>Software Developer, Fight Choreographer, Juggler, Former Raft Guide</p>
      </div>
      <ProjectsPage />
    </div>
  );
}

export default App;
