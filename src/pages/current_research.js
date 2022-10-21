import React, { Component } from 'react';
import ImageFadeIn from "react-image-fade-in";
import parse from 'html-react-parser';
import researchData from '../page_data/current_research.js';

import authorImgDict from '../components/authorImgDict';


class ResearchItem extends Component {
  constructor(props) {
    super(props);

    
  }

  renderAuthors(authors) {
    var authorNames = this.props.authors.replace(/, /g, " and ").split(" and ");
    //console.log(authorImgDict)

    function shortenName(authorName, numAuthors) {
      if(numAuthors === 1) return authorName;

      var s = authorName.split(" ");
      if(s.length > 1) {
        return s[0][0] + " " + (s.slice(1, s.length)).join(" ");
      } else {
        return s;
      }

    }

    return (
      <span className="authors-with-photos">
        {
          authorNames.map((authorName, i) => 

            <span className="author-with-photo">
              
              <div className="author-mini-photo">
                { authorImgDict[authorName] && 
                <ImageFadeIn className="author-mini-photo-image" loadAsBackgroundImage={true} src={`${process.env.PUBLIC_URL}/images/${authorImgDict[authorName]["image_filename"]}`}></ImageFadeIn>
                }
              </div>
              <span className="author-name">{shortenName(authorName, authorNames.length)}</span>              
            </span>
          )
        }
      </span>
    )
  }
  //       <div className={"grid-item" + (this.props.image_filename ? " full-width" : "")}>
  /*
              { this.props.image_filename && 
            <div className="profile-card-photo-container">
              <ImageFadeIn className="profile-card-photo demo-photo" loadAsBackgroundImage={true} src={`${process.env.PUBLIC_URL}/images/${this.props.image_filename}`}></ImageFadeIn>
            </div>
            }
  */

  render() {

    return (
      <div className={"grid-item"}>
        <div className="profile-card research-item margin-bottom-2x">

          <div className="profile-card-body">

            <div className="profile-card-text-container">
              <div className="profile-card-name-byline">
              <p className="profile-card-name">{ this.props.name }</p>
              <p className="profile-card-byline">{ this.renderAuthors() }</p>
              </div>
              <p className="profile-card-details">
                { parse(this.props.description) }
              </p>              
            </div>
            
          </div>
          { this.props.image_filename &&
            <div className="profile-card-gutter">
              <div className="profile-card-supported-by">
              <span>Supported by</span>
              <a href={this.props.url} target="_blank">
                <ImageFadeIn className="profile-card-supported-by-logo" src={`${process.env.PUBLIC_URL}/images/${this.props.image_filename}`}></ImageFadeIn>
              </a>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

          // <div className="profile-card-photo-container">
          //   <ImageFadeIn className="profile-card-photo demo-photo" loadAsBackgroundImage={true} src={`${process.env.PUBLIC_URL}/images/${this.props.image_filename}`}></ImageFadeIn>
          // </div>

class CurrentResearchPage extends Component {

  render() {
    return (
      <div>      
      	<section>	
      		<h2>Current Research</h2>
        </section>
     

          { researchData.map((group, i) => 
            <section>
            <h3>{group.group}</h3>

            <div className="grid-2">

            {
              group.items.map((item, j) => 
                
                  <ResearchItem {...item} />

              )
            }
            </div>
            </section>
        )}

      </div>
    )   
  }
}

export default CurrentResearchPage;