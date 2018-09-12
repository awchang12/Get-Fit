import React, { Component } from 'react';

import { Button } from 'semantic-ui-react'

export default class GoalsContainer extends Component {
    state= {
        goals: [],
        addGoal: false,
        content: ''
    }

    componentDidMount(){
        let token = localStorage.getItem("token")
        fetch("http://localhost:3000/goals", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.json())
        .then(data => {
            this.setState({
                goals: data
            })
        })
        .catch(e => console.error(e))
    }

    onToggleClick = () => {
        this.setState({
            addGoal: !this.state.addGoal
        })
    }

    addGoal = event => {
        event.preventDefault()
        const params = {
            content: event.currentTarget.content.value,
            user_id: this.props.user.id
        }
        console.log(params)
        const token = localStorage.getItem("token")
        fetch('http://localhost:3000/goals',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                goals:[...this.state.goals, data],
                addGoal: false
        })})

        
    }

    deleteGoal = (id) => {
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/goals/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
            goals: data
        })})
    }

    onContentChange = event => {
        this.setState({
            content: event.target.value
        })
    }
    render(){
        return( <div className="card">
        {this.state.addGoal ? 
            <div>
                <Button basic onClick={this.onToggleClick} color="teal">Back to Goals</Button>
                <form className="ui small form" onSubmit={this.addGoal}>
                    <div className="field">
                        <label>Content</label>
                        <textarea type="textarea" onChange={this.onContentChange} name="content" placeholder="My goal is..."/>
                    </div>
                    <Button basic color="green">Add goal!</Button>
                </form>
            </div> : 
        <div className="content">
            <div className="header">Weekly Goals</div>
            <div className="meta"><Button basic size="mini" color="teal" onClick={this.onToggleClick}>add goal</Button></div>
            <div className="description">
                {this.state.goals.map(goal => <li key={goal.id}>{goal.content}<Button basic compact size="mini" onClick={() => this.deleteGoal(goal.id)}>x</Button></li>)}
            </div>
        </div>}
    </div> )
    }
}