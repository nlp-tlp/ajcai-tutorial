import React, { Component } from 'react';
import ImageFadeIn from "react-image-fade-in";


import profileData from '../page_data/our_team.js';

import profile_placeholder from '../images/profile-placeholder.png';

// import mstewart from '../images/profile_photos/michael-stewart.jpg';
// import wliu from '../images/profile_photos/wei-liu.jpg';
// import tfrench from '../images/profile_photos/tim-french.jpg';
// import mhodkiewicz from '../images/profile_photos/melinda-hodkiewicz.jpg'
// import tbikaun from '../images/profile_photos/tyler-bikaun.jpg'
// import zzhao from '../images/profile_photos/ziyu-zhao.jpg'
// import cwoods from '../images/profile_photos/caitlin-woods.jpg'
// import tsmoker from '../images/profile_photos/tom-smoker.jpg'
// import menkhsaikhan from '../images/profile_photos/majiga-enkhsaikhan.jpg'
// import hwu from '../images/profile_photos/haolin-wu.jpg'

// const profileImages = {
// 	'Michael Stewart': mstewart,
// 	'Wei Liu': wliu,
// 	'Tim French': tfrench,
// 	'Melinda Hodkiewicz': mhodkiewicz,
// 	'Tyler Bikaun': tbikaun,
// 	'Ziyu Zhao': zzhao,
// 	'Caitlin Woods': cwoods,
// 	'Tom Smoker': tsmoker,
// 	'Majiga Enkhsaikhan': menkhsaikhan,
// 	'Haolin Wu': hwu,
// } 

const missingPhotos = ["laura-peh.jpg", "alex-rohl.jpg", "frederick-subere-albawy.jpg"]


class ProfileCard extends Component {
	constructor(props) {
		super(props);
	}

	// addDefaultSrc(e) {
	// 	if(e.target.parentElement.classList.contains("missing-photo")) return;
	// 	console.log(e);
	// 	e.target.parentElement.classList.add("missing-photo");
	// }

	render() {

		return (
			<div className="profile-card">
				<div className="profile-card-body">


					{ this.props.image_filename ? 
						
						<div className="profile-card-photo-container dark-bg">
							<ImageFadeIn className="profile-card-photo" loadAsBackgroundImage={true} src={`${process.env.PUBLIC_URL}/images/${this.props.image_filename}`}></ImageFadeIn>
          				</div> :
          				<div className="profile-card-photo-container dark-bg"><div className="profile-card-photo missing-photo"></div></div>
					}
					

					<div className="profile-card-text-container">
						<p className="profile-card-name">{ this.props.name }</p>
						<p className="profile-card-byline">{ this.props.title }</p>

						{ this.props.project_title && 
							<p className="profile-card-phd-title"><em>{ this.props.project_title }</em></p>
						}

						<div className="profile-card-links">
							{ this.props.uwa_profile && 
								<p><a target="_blank" href={this.props.uwa_profile}>UWA Profile</a></p>
							}
							{ this.props.website && 
								<p><a target="_blank" href={this.props.website}>Website</a></p>
							}
							{ this.props.linkedin_profile && 
								<p><a target="_blank" href={this.props.linkedin_profile}>LinkedIn</a></p>
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class OurTeamPage extends Component {

  render() {
    return (
      <div>
      <section>
      <h2>Our Team</h2>
      </section>

      { profileData.map((group, i) => 

      	<section>	

      		<h3>{group.group}</h3>
      		<div className="grid-2">
      		{
      			group.items.map((person, j) => 
      				<div className="grid-item">
      					<ProfileCard {...person} />
      				</div>

      			)
      		}
      		</div>
      	</section>
      )}


     

      </div>
    )
  }
}

export default OurTeamPage;
