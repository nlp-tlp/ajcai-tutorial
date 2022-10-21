import React, { Component } from 'react';
const { Octokit } = require("@octokit/core");
const octokit = new Octokit();


class RepoCard extends Component {

  render() {

    return <div className="repo-card">
      <h3><a href={this.props.html_url} target="_blank">{this.props.name}</a></h3>
      <p>{this.props.description}</p>
      <div className="repo-icons">
        <span className="repo-icon-set"><i className="fa fa-star-o"></i>{this.props.watchers_count}</span>
        <span className="repo-icon-set"><i className="fa fa-code-fork"></i>{this.props.forks_count}</span>
      </div>
    </div>

  }

}

class GithubPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    }
  }

  async componentDidMount() {
    var repos = await octokit.request('GET /orgs/nlp-tlp/repos', {
      org: 'nlp-tlp',
      private: true,
    });
    this.setState({
      repos: repos.data,
    });
  }


  render() {
    console.log("REPOS:", this.state.repos)

    return (
      <div>      
      	<section>	
      		<h2>The NLP-TLP GitHub</h2>
        </section>

        <section className="repo-intro">
          The <b><a href="https://github.com/nlp-tlp" target="_blank">NLP-TLP Github site</a></b> contains all of our publicly available software. <br/>Our public repositories are listed below.
        </section>
     
          {
            this.state.repos.map((repo, j) => 
              <RepoCard {...repo} />
            )
          }
          

      </div>
        
    )   
  }
}

export default GithubPage;