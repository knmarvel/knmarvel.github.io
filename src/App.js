import kanosface from './assets/pics/kanosface.jpg';
import marklight from "./assets/pics/medialinks/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png"
import linkedinin from "./assets/pics/medialinks/LinkedIn-Logos/LI-In-Bug.png"
import twitterCircle from "./assets/pics/medialinks/Twitter Social Icons/Twitter Social Icons/Twitter_SocialIcon_Circle/Twitter_Social_Icon_Circle_White.png"
import './App.css';
import {Helmet} from "react-helmet"
import {
  ModalManager,
  BlogLanding
} from "./components"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
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
            <Route path="/blog">
              <BlogLanding/>
            </Route>
            <Route path="/">
              <ModalManager/>
            </Route>
          </Switch>
        </Router>
        <div className="find-me">
          <p>
            Find me elsewhere:
          </p>
          <div className="social-media-links">
            <a href="https://github.com/knmarvel">
              <img src={marklight} alt="GitHub"/>
            </a>
            <a href="https://linkedin.com/in/kano-marvel">
              <img height="32px" src={linkedinin} alt="LinkedIn"/>
            </a>
            <a href="https://twitter.com/kanomarvel">
              <img height="32px" src={twitterCircle} alt="Twitter"/>
            </a>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
