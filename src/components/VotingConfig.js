import React, { Component } from 'react';
//const { PureComponent } = React;

class VotingConfig extends Component{
   state = {
      formState: {
         id: '',
         candidateId: "",
         name: "",
         vote:0,
         mode: "Submit"
      },
      users: [
         {
            id: 0,
            candidateId: "A123",
            name: "Kumar",
            vote:0,
         },
         {
            id: 1,
            candidateId:"A124",
            name: "Pankaj",
            vote:0,
         }
      ]
   };

   resetFormState = () => {
      this.setState({
         formState: {
            name: "",
            candidateId:"",
            mode: "Submit",
            id: ""
         }
      });
   };

   onChange = event => {
      this.setState({
         formState: {
            ...this.state.formState,
            [event.target.name]: event.target.value
         }
      });
   };

   onSubmit = event => {
      const { users, formState } = this.state;
      event.preventDefault();
      const name = event.target.querySelector("input[name='name']").value;
      const candidateId = event.target.querySelector("input[name='candidateId']").value;
      if(name == "" || candidateId == ""){
          alert("Please enter the candidate name and Candidate Id.");
      }
      else if (formState.mode === "Submit") {
        var vote = 0;
        this.setState({
            users: [
               ...this.state.users,
               {
                  id: +new Date(),
                  candidateId,
                  name,
                  vote,
                  //updating: false,
               }
            ]
         });
      } 
       this.resetFormState();
   };

   deleteUser = key => {
      let { users } = this.state;
      users.splice(key, 1);
      this.setState({
         users: [...users]
      });
   };

   shareURL = users => {
    var myJSON = JSON.stringify(users);
    alert(myJSON);
   };

   render() {
      const { users, formState } = this.state;
      return (
         <div>
            <Form
               formState={formState}
               onChange={this.onChange}
               onSubmit={this.onSubmit}
            />
            <Table
               users={users}
               //updateUser={this.updateUser}
               deleteUser={this.deleteUser}
               shareURL={this.shareURL}
            />
         </div>
      );
   }
}


const Table = ({ users = [], deleteUser, shareURL }) => {
   return (
       <div class="table-responsive container text-center">
        <br/><br/><br/><br/>
        <table class="table table-hover container text-left">
            <thead>
                 <tr>
                     <th>Candidate ID</th>
                    <th>Candidiate Name</th>
                    <th> Total Votes</th>
                    <th>Options</th>
                </tr>
            </thead>
            {users.map((user, key) => {
            return (
                <div>
                <tbody>
                    <tr>
                        <td>{user.candidateId}</td>
                        <td>{user.name}</td>
                        <td>{user.vote}</td>
                        <td>
                            {/* <button className="glyphicon glyphicon-edit" onClick={() => updateUser(key)}>Edit
                            </button> */}
                            <button onClick={() => deleteUser(key)}>Delete </button>
                        </td>
                    </tr>
                </tbody>
                </div>
                );
            })}
            <button class="btn btn-primary" onClick={() => shareURL(users)}>Share URL to Vote</button>
        </table>
        
    </div>
    );
};

const Form = ({ formState, onChange, onSubmit }) => {
   return (
       <div className="container text-center">
        <form className="container text-left" onSubmit={onSubmit}>
            <div className="form-group mb-2">
                <input type="text" className="form-control"
                name="candidateId"
                placeholder="Enter candidate Id" 
                value={formState.candidateId}
                onChange={onChange}/>
            </div>
            <div className="form-group mb-2">
                <input type="text" className="form-control"
                name="name"
                label="Candidate Name "
                placeholder="Enter candidate name"
                value={formState.name}
                onChange={onChange}/>
            </div>
            <br/>
            <button class="btn btn-primary">{formState.mode}</button>
            
        </form>
      </div>
   );
};

export default VotingConfig;




// participant listenerCount - add update delete
// user can vote 
// table form 


// how to create json data in React
// how to create a table in React
