import React from 'react';
import Card from './components/cardContainer/Card.js'
import ProjectsPage from './components/ProjectsPage.js'
import Blogs from './components/Blogs.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="picture-card">
        <Card />
        </div>
        <p>
          Seth Maisel Portfolio / Profile
        </p>
      </header>

      <div className='col-xs-6 side-front-content'>

        <h1>Full-Stack Developer</h1>
        <a href="https://medium.com/@seth.maisel">Check out my Blogs!</a>

        <p>I have an instinct for the user experience and want to bring my creative flair to the world of coding.</p>

        <p>Graduate of the Flatiron School Software Develpment Boot Camp. Ruby on Rails, JavaScript, React</p>

        <p>Software Developer, Fight Choreographer, Juggler, Former Raft Guide</p>
        <ProjectsPage />
        <Blogs />
      </div>

    </div>
  );
}

export default App;
