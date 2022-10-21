import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";




class SidenavLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li><Link to={this.props.path} className={this.props.currentPath === this.props.path ? "active" : ""}>{this.props.name}</Link></li>
  }
}

class Sidenav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match, location, history } = this.props;
    const currentPath = location.pathname;

    const links = [
      ["/", "Home"],      
      ["/our-team", "Our team"],
      ["/current-research", "Current research"],      
      ["/software-demos", "Software demos"],    
      ["/github", "NLP-TLP GitHub"],   
      ["/publications", "Publications"],
      ["/presentations", "Presentations"],
      ["/collaborations", "Collaborations"],
      ["/phd-opportunities", "PhD opportunities"],
      ["/news", "News"],
      ["/contact-us", "Contact us"],
    ]
    
    return (
      <nav className="sidenav padded-v-1x padded-h-2x margin-right-3x">
        <h3>UWA NLP-TLP Group</h3>
        <ul className="chevron-bullets">
          { links.map( (link, i) => 
            <SidenavLink currentPath={currentPath} path={link[0]} name={link[1]}/>
          )}
        </ul>
      </nav>
    )
  }
}

export default withRouter(Sidenav)