import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kano Marvel</h1>
        <span></span>
        <h3>Summary</h3>
        <p>
        Full stack web developer using Python, Django, HTML, CSS, JavaScript, React, and Redux.
        </p>
      </header>
      <body>
        <h2>Examples of my work:</h2>
        <div className="projectDiv socialProjectDiv">
          <h3>Social Media Clones</h3>
          <div className="socProj kwitProj">
            <a href="https://kano-kenzie.gitlab.io/q2/assessment---kwitter-frontend/">Kwitter</a> (Twitter clone)
          </div>
          <div className="socProj kanoProj">Kanogram Someday</div> (Instagram clone)
          <div className="socProj kanoProj">GhostPost</div> (Reddit clone)
        </div>
        <div className="projectDiv productivityProjectDiv">
          <h3>Productivity Apps</h3>
          <div className="prodProj todoProj">To Do List</div>
          <div className="prodProj randProj">Random Number Generators</div>
        </div>
        <div className="projectDiv gameProjectDiv">
          <h3>Games</h3>
          <div className="gameProj battProj">Battleship</div>
          <div className="gameProj mazeProj">Maze</div>
          <div className="gameProj connProj">Connect 4</div>
          <div className="gameProj rockProj">Rock, Paper, Scissors</div>
          <div className="gameProj magiProj">Magic 8 Ball</div>
          <div className="gameProj jeopProj">Jeopardy</div>
          <div className="gameProj sokoProj">Sokoban</div>
          <div className="gameProj oregProj">Oregon Trail</div>

        </div>
      </body>
      
      <footer>
        <span className="socialMedia">
            <a href="linkedin.com/in/karen-kano-marvel-3761b0b5">LinkedIn</a> <a href="https://github.com/knmarvel">Github</a> <a href="https://gitlab.com/knmarvel">Gitlab</a> 
        </span>
      </footer>
    </div>
  );
}

export default App;
