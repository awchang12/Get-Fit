import React, { Component } from 'react'

export default class Signup extends Component {

    render(){
        return(
            <div className="ui container">
                <button className="ui button" onClick={this.props.login}>Back to Login</button>
                <form className="ui small form" onSubmit={(event) => this.props.signup(event) }>
                    <div className="fields">
                        <div className="field">
                            <label>First Name</label>
                            <input type="text" name="firstName" placeholder="First Name"/>
                        </div>
                        <div className="field">
                            <label>Last Name</label>
                            <input type="text" name="lastName" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="fields">
                        <div className="field">
                            <label>Username</label>
                            <input type="text" name="username" placeholder="Username"/>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="fields">
                        <div className="field">
                            <label>Starting Weight</label>
                            <input type="number" name="startingWeight" placeholder="Starting Weight"/>
                        </div>
                        <div className="field">
                            <label>Goal Weight</label>
                            <input type="number" name="goalWeight" placeholder="Goal Weight"/>
                        </div>
                    </div>
                    <div className="fields">
                        <div className="field">
                            <label>Height in inches</label>
                            <input type="number" name="height" placeholder="Inches"/>
                        </div>
                        <div className="field">
                            <label>Age</label>
                            <input type="number" name="age" placeholder="Age"/>
                        </div>
                        <div className="field">
                            <label>Gender</label>
                            <select className="ui dropdown" name="gender">
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}