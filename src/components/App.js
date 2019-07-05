import React, { Component } from 'react';
import { Router,Route, Link } from 'react-router-dom';


import '../css/App.css';

import UserRole from './UserRole';
//import UserVoting from './UserVoting';
//import VotingConfig from './VotingConfig';

class App extends Component {

  constructor() {
    super(); 
    this.state = { showVotingConfig: false }
  }
  showVoting = () => {
    this.state({
      showVotingConfig : true 
    });
  }
  render() {
    return <Voting />;
  }
  
}

class Voting extends Component{
  render() {
    return (
      <div>
      {/* <section className="App">
      <Router>
        ...
        <switch>
        <Link to="/home">Home</Link>
        <Link to="/search?q=react">Search</Link>
        ...
        <Route exact path="/search" component={SearchPage} />
        </switch>
        <Route component={NoMatchPage} />
      </Router>
      </section> */}
      <main>
        <nav className="navbar navbar-expand-lg navbar-dark navBackground">
          <img src="images/vote.png" height="50" alt="universityvotes" />
          <a className="navbar-brand logo" href="index.html">University Votes</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    <i className="aboutUS"></i> About Us
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
              
              </ul>
            </div>
        </nav>

            
        <div className="jumbotron">
            <div className="container text-center">
              <h1>Welcome to University Voting System</h1>      
              <p></p>
            </div>
        </div>
        
        <div id="UserRole">
          <div>
            <UserRole />
          </div>
        </div>
      </main>
      </div>
    );

  }
}

const NoMatchPage = () => {
  return (
    <h3>404 - Not found</h3>
  );
};

export default App;