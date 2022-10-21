import React, { Component } from 'react';

import publicationsData from '../page_data/publications.js';

class PublicationsPage extends Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>      
      	<section>	
      		<h2>Publications</h2>
      	</section>

        { publicationsData.map((group, i) => 

        <section> 

          <h3>{group.group}</h3>
          <ul className="publications-list">
          {
            group.items.map((item, j) => 
              <li className="publication">
                <div className="publication-title">
                  {
                    item.url ? <a href={item.url} target="_blank">{item.title}</a> : item.title
                  }
                </div>
                <div className="publication-authors">{item.authors}</div>
                <div className="publication-venue">{item.venue}</div>
              </li>

            )
          }
          </ul>
        </section>
      )}
      	
      </div>
    )   
  }
}

export default PublicationsPage;