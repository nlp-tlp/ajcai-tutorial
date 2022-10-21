import React, { Component } from 'react';

class ContactUsPage extends Component {

  render() {
    return (
      <div>      
      	<section>	
      		<h2>Contact Us</h2>
      		<p>If you would like to get in touch please feel free to send us an email at &nbsp;
            <span class="crypted-email"
              data-name="michael.stewart"
              data-domain="uwa"
              data-tld="edu.au"
              ></span>.</p>
      	</section>
      </div>
    )   
  }
}

export default ContactUsPage;