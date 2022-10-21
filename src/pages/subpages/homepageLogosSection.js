import React, { Component } from "react";

import collaboratorData from "../../page_data/collaborations.js";

// import ctmtds_logo from '../../images/collaborator_logos/DSTM-Logo-RGB.png'
// import iof_logo from '../../images/collaborator_logos/iof.png'
// import nist_logo from '../../images/collaborator_logos/nist.png'
// import shl_logo from '../../images/collaborator_logos/shl-logo.png'
// import sirius_logo from '../../images/collaborator_logos/sirius.png'
// import alan_turing_institute_logo from '../../images/collaborator_logos/alan-turing-institute.png'

// const logos = [
//   { src: ctmtds_logo, description: "Centre for Transforming Maintenance through Data Science", url: "https://maintenance.org.au" },
//   { src: nist_logo,   description: "National Institute of Standards and Technology", url: "https://www.nist.gov" },
//   { src: shl_logo,    description: "UWA System Health Lab", url: "https://systemhealthlab.com/" },
//   { src: iof_logo,    description: "International Ontology Foundry", url: "https://www.industrialontologies.org/" },
//   { src: sirius_logo, description: "Sirius", url: "https://sirius-labs.no/" },
//   { src: alan_turing_institute_logo, description: "Alan Turing Institute", url: "https://www.turing.ac.uk/" },
// ]

class HomepageLogosSection extends Component {
  render() {
    var logos = [];
    var seenLogos = new Set();
    for (var d of collaboratorData[0].items) {
      if (!seenLogos.has(d.image_filename)) {
        logos.push({
          image_filename: d.image_filename,
          description: d.name,
          url: d.url,
        });
        seenLogos.add(d.image_filename);
      }
    }
    //console.log(logos);

    return (
      <div>
        <div className="collaborator-logos-section">
          <div className="container">
            <div className="h2-with-center-line">
              <h2>Brought to you by</h2>
            </div>
            <div className="collaborator-logos">
              {logos.map((logo, i) => (
                <a
                  href={logo.url}
                  target="_blank"
                  className="collaborator-logo logo-container"
                >
                  <div
                    className="profile-card-photo"
                    style={{
                      "background-image": `url(${process.env.PUBLIC_URL}/images/${logo.image_filename})`,
                    }}
                  ></div>
                </a>
              ))}
            </div>
            <p>
              For a full list of our collaborative projects please see our xxx{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomepageLogosSection;
