import React, { Component } from "react";

import GoalsContainer from '../components/goalsContainer'
import LogsContainer from '../components/logsContainer'
import FoodContainer from '../components/foodContainer'
import Navbar from '../components/navbar'
import EditUser from '../components/editUser'
import LogsGraph from '../components/logsGraph'
import Food from '../components/food'

export default class UserContainer extends Component {
   state = {
       user: null,
       editUser: false,
       logsGraph: false,
       showFood: false,
       activeItem: 'home'
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

    editUserTrue = () => {
        this.setState({
            editUser: true,
            logsGraph: false,
            showFood: false,
            activeItem: 'edit'
        })
    }

    editUserFalse = () => {
        this.setState({
            editUser: false,
            logsGraph: false,
            showFood: false,
            activeItem: 'home'
        })
    }

    editLogsGraphTrue = () => {
        this.setState({
            logsGraph: true,
            editUser: false,
            activeItem: 'logs'
        })
    }

    toggleFood = () => {
        this.setState({
            showFood: true,
            editUser: false,
            logsGraph: false,
            activeItem: 'foods'
        })
    }

    onEditSubmit = event => {
        event.preventDefault()
        let params = {
          goalWeight: event.currentTarget.goalWeight.value,
          height: event.currentTarget.height.value,
          age: event.currentTarget.age.value,
          caloricGoal: event.currentTarget.caloricGoal.value
        }
        let token = localStorage.getItem("token")
        console.log(this.state.user)
        fetch(`http://localhost:3000/users/${this.state.user.id}`, {
            method: "PATCH",
            body: JSON.stringify(params),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                user: data,
                editUser: false
            })
        })
      }
      
 
    render(){
        return(
            <React.Fragment>
                {this.state.user ? (
                <div className="ui container">
                    <Navbar activeItem={this.state.activeItem} logout={this.props.logout} toggleFood={this.toggleFood} toggleEditTrue={this.editUserTrue} toggleEditFalse={this.editUserFalse} toggleGraphTrue={this.editLogsGraphTrue}/>
                    {this.state.logsGraph ? <h1 className="starting-h1">Logs Graph</h1> : <React.Fragment>{this.state.showFood ? <h1 className="starting-h1">Foods</h1> : <React.Fragment>{this.state.editUser ? <h1 className="starting-h1">Edit User Form</h1> : <h1 className="starting-h1">Welcome {this.state.user.first_name}!</h1>}</React.Fragment>}</React.Fragment>}
                    {this.state.editUser ? <EditUser user={this.state.user} editUser={this.onEditSubmit}/> : <div>{this.state.logsGraph ? <LogsGraph user={this.state.user}/> : <React.Fragment>{this.state.showFood ? <Food/> : <div className="ui three doubling stackable cards user">
                        <GoalsContainer user={this.state.user}/>
                        <LogsContainer user={this.state.user}/>
                        <FoodContainer user={this.state.user}/>
                    </div>}</React.Fragment>}</div>}
                   
                </div>
                ) : (
                <p>Loading...</p>
                )}
            </React.Fragment>
        )
    }
}