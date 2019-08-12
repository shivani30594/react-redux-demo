import React, { Component } from 'react'
import commonApi from "../../api/commonApi";
import userApi from "../../api/userApi";
import axios from "axios";
import { reduxForm, Field } from "redux-form";

class Users extends Component {

    constructor(props) {
        super()
        this.state = { users: [] };
    }

    componentDidMount = () => {
        this.userdata();
    }

    userdata = () => {
        commonApi.fetchUsers().then(json => {
            this.setState({ users: json});
        });
    }

    // addUser = () => {
    //     console.log("clicked");
    // }

    editUser = (id) => {
        console.log("edit",id);
        userApi.editUser(id).then(json => {
            this.setState({ usersData: json});
        });
    }
   
    render() {
        console.log("state", this.state)
        return (
            <div className="container">
                  {/* <form id="usersForm" onSubmit={() => this.addUser()}>
                     <Field
                          colom={4}
                          className="form-control"
                          name="firstname"
                          component={renderSingleField}
                          type="text"
                          label="First Name"
                          validate={[required]}
                    />
                 </form> */}
                {
                    this.state.users.length > 0 ? this.state.users.map((user, index) => 
                        {
                            return (
                                <div className='user-info' key={index}>
                                    <h4>{user.name}</h4>
                                    <p>{user.email}</p>
                                    <button onClick = {() => this.editUser(user.id)}> Edit </button>
                                </div>
                            )
                        }
                    ) : 'No records found'
                }
            </div>
         
        )
    }
}

// export default Users({
//     form: "usersform",
//     enableReinitialize: true
//   })(Form);

export default Users;
