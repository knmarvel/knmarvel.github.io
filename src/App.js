import kanosface from './assets/pics/kanosface.jpg';
import './App.css';
import {Helmet} from "react-helmet"
// import {useState} from 'react'
import {Button} from "./components"

function App() {
  // const {openModal, setOpenModal} = useState({closed: null})
  return (
    
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kano Marvel's Portfolio</title>
        <link rel="canonical" href="https://knmarvel.github.io" />
      </Helmet>
      <header className="App-header">
        <img src={kanosface} className="profile-pic" alt="Kano's Face" />
        <h2>
          Hi, I'm Kano Marvel, full stack web developer.
        </h2>
      </header>
      <body>
        <div className="buttons">
          <Button>
            Projects
          </Button>
          <Button>
            Tech Stack
          </Button>
          <Button>
            Resume
          </Button>
        </div>
        <div className="find-me">
          <p>
            Find me on the web:
          </p>
          <div className="social-media-links">
            <a href="github.com/knmarvel">GitHub</a>
            <a href="linkedin.com/in/kano-marvel">LinkedIn</a>
            <a href="twitter.com/kanomarvel">Twitter</a>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
