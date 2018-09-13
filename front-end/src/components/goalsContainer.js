import React, { Component } from 'react';

import { Card, Button, Form } from 'semantic-ui-react'

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
        return( <React.Fragment>
        {this.state.addGoal ? 
           
            <Card>
            <Card.Content>
              <Card.Header>Add a new Goal!</Card.Header>
              <Card.Meta></Card.Meta>
              <Card.Description>
                <Form size='tiny' onSubmit={this.addGoal}>
                  <Form.Group widths='equal'> 
                    <Form.TextArea  fluid label='content'  name="content" placeholder='Add Goal here...' />
                  </Form.Group>
                  <Form.Button basic size="mini" color="teal">Submit</Form.Button>
                </Form>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button basic size="mini" onClick={this.onToggleClick} color="teal">Back to Goals</Button>
            </Card.Content>
          </Card>
             : 
    
        <Card>
      <Card.Content>
        <Card.Header>Weekly Goals</Card.Header>
        <Card.Meta><Button basic size="mini" color="teal" onClick={this.onToggleClick}>add goal</Button></Card.Meta>
        <Card.Description>
        {this.state.goals.map(goal => <li key={goal.id}>{goal.content}<button onClick={() => this.deleteGoal(goal.id)}>x</button></li>)}
        </Card.Description>
      </Card.Content>
    </Card>
    }
    </React.Fragment> )
    }
}