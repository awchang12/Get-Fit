import React, { Component }from 'react'
import { Form } from 'semantic-ui-react'
export default class EditUser extends Component {

    state={
        goalWeight: this.props.user.goalWeight,
        height: this.props.user.height,
        age: this.props.user.age,
        caloricGoal: this.props.user.caloricGoal
    }

    onGoalWeightChange= event => {
        console.log(event.target)
        this.setState({
            goalWeight: event.target.value,
        })
    }

    onHeightChange = event => {
        this.setState({
            height: event.target.value
        })
    }

    onAgeChange= event => {
        console.log(event.target)
        this.setState({
            age: event.target.value,
        })
    }

    onCalorieChange= event => {
        console.log(event.target)
        this.setState({
            caloricGoal: event.target.value,
        })
    }

   
    render() {
        return(
//         return( <form className="ui small form" onSubmit={(event) => this.props.editUser(event) }>
//     <div className="fields">
//         <div className="field">
//             <label>Goal Weight</label>
//             <input type="number" name="goalWeight" value={this.state.goalWeight} onChange={event => this.onGoalWeightChange(event)} placeholder="Goal Weight"/>
//         </div>
//         <div className="field">
//             <label>Height in inches</label>
//             <input type="number" name="height" value={this.state.height} onChange={event => this.onHeightChange(event)} placeholder="Inches"/>
//         </div>
//         <div className="field">
//             <label>Age</label>
//             <input type="number" name="age" value={this.state.age} onChange={event => this.onAgeChange(event)} placeholder="Age"/>
//         </div>
//         <div className="field">
//             <label>Caloric Goal</label>
//             <input type="number" name="caloricGoal" value={this.state.caloricGoal} onChange={event => this.onCalorieChange(event)} placeholder="num of Calories"/>
//         </div>
//     </div>

//     <button className="ui button" type="submit">Submit</button>
// </form>
<Form className="signup" size='tiny' onSubmit={(event) => this.props.editUser(event) }>
        <Form.Group widths='equal'>
          <Form.Input required type='number' fluid label='Goal Weight' value={this.state.goalWeight} name="goalWeight" onChange={event => this.onGoalWeightChange(event)} placeholder='Goal Weight' />
          <Form.Input required fluid type='number' label='Caloric Goal' value={this.state.caloricGoal} name="caloricGoal" onChange={event => this.onCalorieChange(event)} placeholder='number of Calories' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input required type='number' fluid label='Height in Inches'  value={this.state.height} name="height" onChange={event => this.onHeightChange(event)} placeholder='Height' />
          <Form.Input required type='number' fluid label='Age' value={this.state.age} name="age" onChange={event => this.onAgeChange(event)} placeholder='Age' />
        </Form.Group>
    
        <Form.Button color="teal">Submit</Form.Button>
      </Form>)
    }
    
}
