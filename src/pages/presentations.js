import React, { Component } from 'react';
import YouTube from 'react-youtube';

import presentationsData from '../page_data/presentations.js';

const youtubeOpts = {
  height: '100%',
  width: '100%',
  playerVars: {
    autoplay: 0,
  },
};

function getYoutubeVideoId(url) {
  var videoId = url.split("?v=")[1];
  if(videoId.indexOf("&")) {
    videoId = videoId.split("&")[0];
  }
  return videoId;
}
function getYoutubeVideoStartTime(url) {
  if(url.indexOf("&t=") < 0) { 
    return null;
  } else {
    var t = url.split("&t=")[1];
    var mins = parseInt(t.split("m")[0]);
    var seconds = parseInt(t.split("m")[1].split("s")[0]);
    return (mins * 60) + seconds
  }
}



class PresentationVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false
    }
  }
  _onReady() {
    this.setState({
      ready: true
    })
  }

  render() {
    var item = this.props.item;
    var thisYoutubeOpts = {...youtubeOpts}

    try { 
      var youtubeVideoId = getYoutubeVideoId(item.url);
      var startTime = getYoutubeVideoStartTime(item.url);
    } catch(err) {
      console.log("Error rendering video: ", err);
      return (<div></div>);
    }
    

    if(startTime) thisYoutubeOpts.playerVars.start = startTime;
    return (
      <div className="grid-item">
        <div className="presentation">
          <div className="presentation-video-container">
            <div className={"presentation-video-container-fadein " + (this.state.ready ? "ready" : "")}>
            <YouTube videoId={youtubeVideoId} opts={thisYoutubeOpts} onReady={() => this._onReady()} />
            </div>
          </div>
          <div className="presentation-details-container">
            <div className="presentation-title">{item.title}</div>
            { item.date && <div className="presentation-authors-and-date">{item.authors}, {item.date}</div> }
            <div className="presentation-description">{item.description}</div>
          </div>
          
        </div>
      </div>
    )


  }

}

class PresentationsPage extends Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>      
      	<section>	
      		<h2>Presentations</h2>
      	</section>

        { presentationsData.map((group, i) => 

        <section> 

          <h3>{group.group}</h3>
          <div className="grid-2">
          {
            group.items.map((item, j) => 
              <PresentationVideo item={item}/>

            )

          }</div>

        </section>
      )}
      	
      </div>
    )   
  }
}

export default PresentationsPage;