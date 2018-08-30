import React, { Component } from 'react';

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

    onAddClick = () => {
        this.setState({
            addGoal: true
        })
    }

    addGoal = () => {
        const params = {
            content: this.state.content,
            user_id: this.props.user.id
        }
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
        .then(console.log)

        
    }

    onDelete = () => {

    }

    onContentChange = event => {
        this.setState({
            content: event.target.value
        })
    }
    render(){
        return( <div className="raised card">
        {this.state.addGoal ? 
            <div className="ui container">
                <form className="ui small form">
                    <div className="field">
                        <label>Content</label>
                        <textarea type="textarea" onChange={this.onContentChange} name="content" placeholder="My goal is..."/>
                    </div>
                    <button className="ui button" onClick={this.addGoal}>Add goal!</button>
                </form>
            </div> : 
        <div className="content">
            <div className="header">Weekly Goals {<button className="ui button blue" onClick={this.onAddClick}>add goal</button>}</div>
            <div className="meta" />
            <div className="description">
                {this.state.goals.map(goal => <li key={goal.id}>{goal.content}<button onClick={this.deleteGoal}>x</button></li>)}
            </div>
        </div>}
    </div> )
    }
}