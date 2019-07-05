import React, { Component } from 'react';


class VotingPage extends Component{


}

export default VotingPage;

    {/* <div className="table">
         <div className="table-header">
            <div className="row">
               <div className="column">Candidiate Name</div>
               <div className="column">Options</div>
            </div>
         </div>
         <div className="table-body">
            {users.map((user, key) => {
               return (
                  <div className={`row ${user.updating ? "updating" : ""}`}>
                     <div className="column">{user.name}</div>
                     <div className="column">
                        <button
                           className="glyphicon glyphicon-pencil"
                           label="Update"
                           onClick={() => updateUser(key)}
                        >
                        <i className="glyphicon glyphicon-pencil" />
                        </button>
                        <button className="icon">
                           <i
                              className="glyphicon glyphicon-minus"
                              label="Delete"
                              onClick={() => deleteUser(key)}
                           />
                        </button>
                     </div>
                  </div>
               );
            })}
         </div>
      </div> */}


      // const Field = ({ label = "", name = "", value = "", onChange }) => {
//    return (
//       <div className="field">
//          <label htmlFor={name}>{label}</label>
//          <input type="text" name={name} value={value} onChange={onChange} />
//       </div>
//    );
// };


 {/* <fieldset>
                    <Field
                    name="candidateId"
                    label="Candidate Id"
                    class="form-group mb-2"
                    value={formState.candidateId}
                    onChange={onChange}
                    />
                <div class="form-group">
                    <Field
                    name="name"
                    label="Candidate Name "
                    value={formState.name}
                    onChange={onChange}
                    />
                </div>
            </fieldset> */}








            SVGFEDisplacementMapElementsadsad
            sadsad/* 
            
            import React, { Component } from 'react';
//const { PureComponent } = React;

class VotingConfig extends Component{
   state = {
      formState: {
         id: '',
         candidateId: "",
         name: "",
         mode: "Submit"
      },
      users: [
         {
            id: 0,
            candidateId: "A123",
            name: "Kumar",
            updating: false
         },
         {
            id: 1,
            candidateId:"A124",
            name: "Pankaj",
            updating: false
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
         this.setState({
            users: [
               ...this.state.users,
               {
                  name,
                  candidateId,
                  updating: false,
                  id: new Date()
               }
            ]
         });
      } 
    //   else if (formState.mode === "Edit") {
    //      const index = users.find((user)=> user.id === formState.id).id;
    //      users[index] = {
    //               name,
    //               updating: false,
    //               id: users[index].id
    //            }
    //      this.setState({
    //         users: [...users]
    //      });
    //   }

       this.resetFormState();
   };

//    updateUser = key => {
//       let { users } = this.state;
//       users[key].updating = true;

//       this.setState({
//          formState: { ...this.state.users[key], mode: "Update" },
//          users
//       });
//    };

   deleteUser = key => {
      let { users } = this.state;
      users.splice(key, 1);
      this.setState({
         users: [...users]
      });
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
            <Table width="100"
               users={users}
               //updateUser={this.updateUser}
               deleteUser={this.deleteUser}
            />
         </div>
      );
   }
}


const Table = ({ users = [], deleteUser }) => {
   return (
       <div class="table-responsive container text-center">
        <table class="table table-hover">
            <thead>
                {/* <tr>
                    <th>Candidiate Name</th>
                    <th>Options</th>
                </tr> */}
                </thead>
                {users.map((user, key) => {
                return (
                    <div>
                    <tbody>
                        <tr>
                            <td>{user.candidateId}</td>
                            <td>{user.name}</td>
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
    */