import React, { Component } from 'react'
import commonApi from "../../api/commonApi";

class Posts extends Component {
    constructor()
    {
        super();
        this.state = { posts: [] };
    }

    componentDidMount = () => {
        this.userdata();
    }

    userdata = () => {
        commonApi.fetchPosts().then(json => {
            this.setState({ posts: json});
        });
    }

    render() {
        return (
            <div>
                  {
                    this.state.posts.length > 0 ? this.state.posts.map((user, index) => 
                    (
                            <div className='user-info' key={index}>
                                <h4>{user.title}</h4>
                                <p>{user.body}</p>
                                <button onClick = {() => this.editUser(user.id)}> Edit </button>
                            </div>
                    )
                    ) : 'No records found'
                }
            </div>
        )
    }
}

export default Posts ;