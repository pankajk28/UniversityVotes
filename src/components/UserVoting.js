import React, { Component } from 'react';
import VotingData from '../data/votingData.json'

class UserVoting extends Component{

    constructor() {
        super();
        
        this.state = {
          candidateSelected: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({
            candidateSelected: event.target.value
        });
      }

      handleSubmit(event) {
        event.preventDefault();
        alert('You voted for ${this.state.candidateSelected}');

        //if(${this.state.candidateSelected} == null)
      }
    render(){
           
        return (
            <div className="table-responsive container text-left">
            <h3>Please vote for your favourite Candidate</h3>
            <br/>
            <form className="container text-left" onSubmit={this.handleSubmit}>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th> Candidate ID</th>
                        <th>Candidate Name</th>
                        <th> Select </th>
                    </tr>
                </thead>
    
                <tbody>
            {VotingData.map((candidateDetails, index)=>{
                return <div>
                    <tr>
                        <td>
                            <label for="candidateIdValue" class="col-sm-2 col-form-label">{candidateDetails.candidateId}</label>
                        </td>
                        <td>
                            <label for="candidateIdValue" class="col-sm-2 col-form-label">{candidateDetails.name}</label>
                        </td>
                        <td>
                            <input
                            type="radio"
                            value={candidateDetails.candidateId}
                            checked={this.state.candidateSelected === candidateDetails.candidateId}
                            onChange={this.handleChange}
                            />
                        </td>
                    </tr>
                    </div>
                })}
                </tbody>
                </table>
                <br/>
                <button type="submit" class="btn btn-primary">Vote</button> 
                </form>
            </div>
          );
    }
}

const Form = ({ voteState = [], formState }) => {
    return (
        <div className="table-responsive container text-left">
        <h3>Please vote for your favourite Candidate</h3>
        <br/>
        <form className="container text-left" onSubmit={this.handleSubmit}>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th> Candidate ID</th>
                    <th>Candidate Name</th>
                    <th> Select </th>
                </tr>
            </thead>

            <tbody>
        {VotingData.map((candidateDetails, index)=>{
            return <div>
                <tr>
                    <td>
                        <label for="candidateIdValue" class="col-sm-2 col-form-label">{candidateDetails.candidateId}</label>
                    </td>
                    <td>
                        <label for="candidateIdValue" class="col-sm-2 col-form-label">{candidateDetails.name}</label>
                    </td>
                    <td>
                        <input
                        type="radio"
                        value={candidateDetails.candidateId}
                        checked={this.state.candidateSelected === candidateDetails.candidateId}
                        onChange={this.handleChange}
                        />
                    </td>
                </tr>
                </div>
            })}
            </tbody>
            </table>
            <br/>
            {/* <button type="submit" class="btn btn-primary" onClick={() => submitVote(users)}>Vote</button> */}
            </form>
        </div>
      );
};


export default UserVoting;