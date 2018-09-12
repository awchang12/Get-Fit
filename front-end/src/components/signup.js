import React, { Component } from 'react'

// export default class Signup extends Component {

//     render(){
//         return(
//             <div className="ui container">
//                 <button className="ui button" onClick={this.props.login}>Back to Login</button>
//                 <form className="ui small form" onSubmit={(event) => this.props.signup(event) }>
//                     <div className="fields">
//                         <div className="field">
//                             <label>First Name</label>
//                             <input type="text" name="firstName" placeholder="First Name"/>
//                         </div>
//                         <div className="field">
//                             <label>Last Name</label>
//                             <input type="text" name="lastName" placeholder="Last Name"/>
//                         </div>
//                     </div>
//                     <div className="fields">
//                         <div className="field">
//                             <label>Username</label>
//                             <input type="text" name="username" placeholder="Username"/>
//                         </div>
//                         <div className="field">
//                             <label>Password</label>
//                             <input type="password" name="password" placeholder="Password"/>
//                         </div>
//                     </div>
//                     <div className="fields">
//                         <div className="field">
//                             <label>Starting Weight</label>
//                             <input type="number" name="startingWeight" placeholder="Starting Weight"/>
//                         </div>
//                         <div className="field">
//                             <label>Goal Weight</label>
//                             <input type="number" name="goalWeight" placeholder="Goal Weight"/>
//                         </div>
//                         <div className="field">
//                             <label>Caloric Goal</label>
//                             <input type="number" name="caloricGoal" placeholder="Caloric Goal"/>
//                         </div>
//                     </div>
//                     <div className="fields">
//                         <div className="field">
//                             <label>Height in inches</label>
//                             <input type="number" name="height" placeholder="Inches"/>
//                         </div>
//                         <div className="field">
//                             <label>Age</label>
//                             <input type="number" name="age" placeholder="Age"/>
//                         </div>
//                         <div className="field">
//                             <label>Gender</label>
//                             <select className="ui dropdown" name="gender">
//                                 <option value="">Gender</option>
//                                 <option value="male">Male</option>
//                                 <option value="female">Female</option>
//                             </select>
//                         </div>
//                     </div>
//                     <button className="ui button" type="submit">Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }
import { Form, Button } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]



class Signup extends Component {
  state = {
      gender: ""
  }

  onChange = (event, { value }) => {
      console.log()
    this.setState({
        gender: value
    })
}

  render() {
    return (
      <Form className="signup" size='tiny' onSubmit={(event, gender) => this.props.signup(event, this.state.gender) }>
      <Button onClick={this.props.login} color="teal" >Back to Login</Button>
        <h1 className="signup-h1">Sign Up Form</h1>
        <Form.Group widths='equal'>
          <Form.Input required fluid label='First name' name="firstName" placeholder='First name' />
          <Form.Input required fluid label='Last name' name="lastName" placeholder='Last name' />
          
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input required fluid label='Username'  name="username" placeholder='Username' />
          <Form.Input required type='password' fluid label='Password' name="password" placeholder='Password' />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Input required type='number' fluid label='Starting Weight'  name="startingWeight" placeholder='Starting Weight' />
          <Form.Input required type='number' fluid label='Goal Weight' name="goalWeight" placeholder='Goal Weight' />
          <Form.Input required fluid type='number' label='Caloric Goal' name="caloricGoal" placeholder='number of Calories' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input required type='number' fluid label='Height in Inches'  name="height" placeholder='Height' />
          <Form.Input required type='number' fluid label='Age' name="age" placeholder='Age' />
          <Form.Select required fluid label='Gender' name="gender" onChange={this.onChange} options={options} placeholder='Gender' />
        </Form.Group>
    
        <Form.Button color="teal">Submit</Form.Button>
      </Form>
    )
  }
}

export default Signup
