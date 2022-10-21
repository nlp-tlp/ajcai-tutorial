import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  withRouter,
} from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import HomePage from '../pages/home';
import OurTeamPage from '../pages/our_team';
import CurrentResearchPage from '../pages/current_research';
import GithubPage from '../pages/github';
import NewsPage from '../pages/news';
import CollaborationsPage from '../pages/collaborations';
import SoftwareDemosPage from '../pages/software_demos';
import PublicationsPage from '../pages/publications';
import PresentationsPage from '../pages/presentations';
import PhDOpportunitiesPage from '../pages/phd_opportunities';
import UsefulLinksPage from '../pages/useful_links';
import ContactUsPage from '../pages/contact_us';




class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    var location = this.props.location;
    return (
      <main className="padded margin-left-3x">

        <TransitionGroup className="transition-group">
          <CSSTransition
          key={location.key}
          timeout={{ enter: 400, exit:400 }}
          classNames="fade"
          >
          
          <div className="route-section">
          <Switch location={location}>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="/news">
              <NewsPage/>
            </Route>
            <Route path="/our-team">
              <OurTeamPage/>
            </Route>
            <Route path="/current-research">
              <CurrentResearchPage/>
            </Route>            
            <Route path="/collaborations">
              <CollaborationsPage/>
            </Route>
            <Route path="/software-demos">
              <SoftwareDemosPage/>
            </Route>
            <Route path="/github">
              <GithubPage/>
            </Route>
            <Route path="/publications">
              <PublicationsPage/>
            </Route>
            <Route path="/presentations">
              <PresentationsPage/>
            </Route>            
            <Route path="/phd-opportunities">
              <PhDOpportunitiesPage/>
            </Route>
            <Route path="/contact-us">
              <ContactUsPage/>
            </Route>

          </Switch>
          </div>

          </CSSTransition>
        </TransitionGroup>

        
      </main>

    )
  }
}

export default withRouter(MainContainer);
