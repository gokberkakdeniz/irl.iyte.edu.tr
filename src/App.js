import React from 'react'
import { Switch, Route, withRouter } from "react-router-dom"

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookSquare,
  faLinkedin,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faPhone,
  faLocationArrow,
  faLink,
  faSadTear,
  faRobot,
  faCode,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

import { Header, Footer, ScrollToTop } from './Components'

import {
  About,
  Archive,
  Categories,
  Contact,
  Home,
  Invitation,
  NotFound,
  Registration,
  Surviving,
  Sponsors,
  Team,
} from './Pages'

import './App.css'

library.add(faFacebookSquare, faLinkedin, faInstagram, faTwitter, faEnvelope, 
            faPhone, faLocationArrow, faLink, faSadTear, faRobot, faCode, faHeart)

const Scroll = withRouter(ScrollToTop);

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Scroll>
          <Switch>
            <Route exact path="/" children={<Home />} />
            <Route path="/about" children={<About />} />
            <Route path="/archive" children={<Archive />} />
            <Route path="/categories" children={<Categories />} />
            <Route path="/contact" children={<Contact />} />
            <Route path="/invitation" children={<Invitation />} />
            <Route path="/register" children={<Registration />} />
            <Route path="/surviving" children={<Surviving />} />
            <Route path="/sponsors" children={<Sponsors />} />
            <Route path="/team" children={<Team />} />
            <Route component={NotFound} />
          </Switch>
        </Scroll>
      </section>
      <Footer />
    </div>
  );
}

export default App;
