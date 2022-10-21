import React, { Component } from 'react';
import ModalImage from "react-modal-image";
import parse from 'html-react-parser';

import newsData from '../page_data/news.js';

import ImageFadeIn from "react-image-fade-in";
import authorImgDict from '../components/authorImgDict';

class NewsArticle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props)
    return (
      <article>
        <h3>{this.props.title}</h3>
        <p className="article-date">{this.props.date}</p>
        <p>{parse(this.props.article)}</p>
        <div className="article-images">

          {this.props.images && this.props.images.map((image, i) =>
            <ModalImage
              className="article-image"
              small={`${process.env.PUBLIC_URL}/images/${image.image_filename}`}
              large={`${process.env.PUBLIC_URL}/images/${image.image_filename}`}
              alt={image.image_description}
            />
          )}          
        </div>
      </article>
    )



  }
}
/*
        <div className="article-author">
          Article written by
          <span className="author-with-photo">

              <ImageFadeIn className="author-mini-photo" loadAsBackgroundImage={true} src={`${process.env.PUBLIC_URL}/images/${authorImgDict[this.props.author]["image_filename"]}`}></ImageFadeIn>
              <span className="author-name">{this.props.author}</span>
          </span>
        </div>
 */

class NewsPage extends Component {

  render() {
    return (
      <div>      
        <section> 
          <h2>News</h2>
          <div className="news-articles">
              { newsData[0].items.map((newsItem, i) => <NewsArticle {...newsItem}/> )}              
          </div>
        </section>
      </div>
    )   
  }
}

export default NewsPage;