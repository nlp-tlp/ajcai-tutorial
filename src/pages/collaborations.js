import React, { Component } from 'react';
import ImageFadeIn from "react-image-fade-in";
import parse from 'html-react-parser';

import collaboratorData from '../page_data/collaborations.js';


class CollaborationItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile-card collaboration-item">
        <div className="profile-card-body">
          <a href={this.props.url} target="_blank" className="profile-card-photo-container collaborator-logo logo-container">
            <ImageFadeIn className="profile-card-photo" loadAsBackgroundImage={true} src={`${process.env.PUBLIC_URL}/images/${this.props.image_filename}`}></ImageFadeIn>
          </a>
          <div className="profile-card-text-container">
            <p className="profile-card-name">{ this.props.name }</p>
            <p className="profile-card-details">{ parse(this.props.description) }</p>
          </div>
        </div>
      </div>
    )
  }
}

class CollaborationsPage extends Component {

  render() {
    return (
      <div>      
        <section> 
          <h2>Collaborations</h2>
     
          <div>
          {
            collaboratorData[0].items.map((item, j) => 
              <CollaborationItem {...item} />

            )
          }
          </div>

        </section>
      </div>
    )   
  }
}

export default CollaborationsPage;