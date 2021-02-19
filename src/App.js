import kanosface from './assets/pics/kanosface.jpg';
import marklight from "./assets/pics/medialinks/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png"
import linkedinin from "./assets/pics/medialinks/LinkedIn-Logos/LI-In-Bug.png"
import twitterCircle from "./assets/pics/medialinks/Twitter Social Icons/Twitter Social Icons/Twitter_SocialIcon_Circle/Twitter_Social_Icon_Circle_White.png"
import './App.css';
import {Helmet} from "react-helmet"
import {
  ModalManager,
  BlogLanding,
  BlogPostDetail
} from "./components"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState, useEffect } from "react"

const schemes = {
  wireframe: {
    false: {
      '--main-bg-color': '#282c34', 
      '--main-text-color': '#53F4F4',
      '--highlight-color1': '#EBFDFC',
      '--highlight-color2': '#E6F4F1',
      '--lowlight-color': '#4f9d9c',
    },
    true: {
      '--main-bg-color': '#EBFDFC', 
      '--main-text-color': '#53F4F4',
      '--highlight-color1': '#282c34',
      '--highlight-color2': '#E6F4F1',
      '--lowlight-color': '#4f9d9c',
    }
  }
}

function App() {
  const [light, setLight] = useState(false)
  const [scheme, setScheme] = useState("wireframe")
  const toggleLight = () => {
    setLight((prev) => {return !prev})
    if(1==2){
      setScheme("disco")
    }
  }

  useEffect(() => {
    Object.entries(schemes[scheme][light]).map(
      ([key, val]) => document.documentElement.style.setProperty(key, val))
  },[light, scheme])

  return (
    
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kano Marvel's Portfolio</title>
        <link rel="canonical" href="https://knmarvel.github.io" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Open+Sans&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div className="light-container">
        <div className="light">
          <div className="bead-container">
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
            <div className="bead"/>
          </div>
          <div className={`handle handle-${light}`} onClick={toggleLight}/>
          </div>
        </div>
      <header className="App-header">
        <img src={kanosface} className="profile-pic" alt="Kano's Face" />
        <h2>
          Hi, I'm Kano Marvel, full stack web developer.
        </h2>

      </header>
      <body>
        <div className="App">
          <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/blog/:blogid" component={BlogPostDetail}/>
              <Route path="/blog">
                <BlogLanding/>
              </Route>
              <Route path="/">
                <ModalManager/>
              </Route>
            </Switch>
          </Router>
        </div>
        <div className="connection"/>
        <div className="tabletop">
          <div className="find-me">
            <div className="social-media-links">
              <a href="https://github.com/knmarvel">
                <img src={marklight} alt="GitHub"/>
              </a>
              <a href="https://linkedin.com/in/kano-marvel">
                <img height="32em" src={linkedinin} alt="LinkedIn"/>
              </a>
              <a href="https://twitter.com/kanomarvel">
                <img height="32em" src={twitterCircle} alt="Twitter"/>
              </a>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
