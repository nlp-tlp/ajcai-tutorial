import React, { Component } from 'react';

class PhDOpportunitiesPage extends Component {

  render() {
    return (
      <div>      
      	<section>	
      		<h2>PhD Opportunities</h2>
      		<p>We are currently looking for prospective PhD students who are interested in any of the following:</p>
          <ul className="chevron-bullets extra-indent">
              <li>Entity recognition</li>
              <li>Lexical normalisation</li>
              <li>Knowledge graphs</li>
              <li>Ontologies</li>
              <li>Annotation</li>
              <li>Adaptive user interfaces</li>
              <li>Knowledge representation and reasoning</li>
            </ul>
          <p>If you are interested please contact Michael at <span class="crypted-email"
              data-name="michael.stewart"
              data-domain="uwa"
              data-tld="edu.au"
              ></span>.</p>
      	</section>
      </div>
    )   
  }
}

export default PhDOpportunitiesPage;