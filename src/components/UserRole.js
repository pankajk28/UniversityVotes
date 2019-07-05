import React, { Component } from 'react';

import VotingConfig from './VotingConfig';
import UserVoting from './UserVoting'

class UserRole extends Component{

    constructor() {
        super(); 
        this.state = { showVotingConfig: false }
        this.state = {candidateDetails: false}
      }
    
    render(){
        return(
            <div>
                <VotingConfig />
                {/* <button type="button" className="btn btn-primary btn-lg" onClick={this.state = { showVotingConfig: true }}>Admin</button>
                { this.state.showVotingConfig && (<VotingConfig />) }
                &nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-primary btn-lg" onClick={this.state = {candidateDetails : true}}>User</button>
                { this.state.candidateDetails && (<UserVoting />) } */}

                <br/>
                <br/>
                <UserVoting />
            </div>
            
        );
    }
}

export default UserRole;


// <button type="button" class="btn btn-primary btn-lg" onclick={this.state = { showVotingConfig: true }}>Admin</button>
// { this.state.showVotingConfig && (<VotingConfig />) }