import React, { Component } from "react";

import GoalsContainer from '../components/goalsContainer'
import LogsContainer from '../components/logsContainer'

export default class UserContainer extends Component {
   state = {
       user: null
   }
    componentDidMount() {
        let token = localStorage.getItem("token")
        fetch("http://localhost:3000/showuser", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.json())
        .then(data => {
            this.setState({
                user: data
            })
        })
        .catch(e => console.error(e))
    }
 
    render(){
        return(
            <div>
                {this.state.user ? (
                <div className="ui container">
                    <button onClick={this.props.logout}>LogOut</button>
                    <h1>{this.state.user.username}</h1>
                    <div className="ui two doubling stackable cards">
                       <GoalsContainer user={this.state.user}/>
                        <LogsContainer user={this.state.user}/>  
                    </div>
                </div>
                ) : (
                <p>Loading...</p>
                )}
            </div>
        )
    }
}