import React, { Component } from 'react';
import ImageFadeIn from "react-image-fade-in";

import demoData from '../page_data/software_demos.js';

function renderDetails(str) {

}

class SoftwareDemoCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    //var imageName = this.props.name.replace(/ /g, "-").toLowerCase();

    return (
      <div className="profile-card demo-card margin-bottom-2x">

        <div className="profile-card-body">
          <div className="profile-card-photo-container">
            <ImageFadeIn className="profile-card-photo demo-photo" loadAsBackgroundImage={true} src={`${process.env.PUBLIC_URL}/images/${this.props.image_filename}`}></ImageFadeIn>
          </div>
          <div className="profile-card-text-container">
            <p className="profile-card-name">{ this.props.name }</p>
            <p className="profile-card-byline">{ this.props.byline }</p>
            <p className="profile-card-details">
              { this.props.description }
            </p>
          </div>
        </div>

        <div className="profile-card-gutter">          
          <div className="profile-card-gutter-left"></div>
          <div className="profile-card-gutter-right">
              { this.props.paper_link && 
                <a className="button" target="_blank" href={this.props.paper_link}>
                  Read the paper
                  { this.props.paper_venue && <div className="subtitle">from {this.props.paper_venue }</div>}
                  
                </a>
              }
              { this.props.demo_link && 
                <a className="button" target="_blank" href={this.props.demo_link}>Try the demo</a>
              }
            </div>
        </div>
      </div>
    )
  }
}
// <div>{this.props.paper_venue && <div className="subtitle">{this.props.paper_venue}</div> }</div>

class SoftwareDemosPage extends Component {

  render() {
    return (
      <div>      
      	<section>	
      		<h2>Software Demonstrations</h2>
          {
            demoData[0].items.map((demo, j) => 
              <SoftwareDemoCard {...demo} />
            )
          }
      	</section>
      </div>
    )   
  }
}

export default SoftwareDemosPage;
