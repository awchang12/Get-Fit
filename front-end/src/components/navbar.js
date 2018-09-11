import React, { Component } from 'react'

export default class Navbar extends Component {
    render(){
        return(
             <div className="ui secondary menu">
                <button className="ui button" onClick={this.props.toggleEditFalse}>
                    Home
                </button>
                <button className="ui button" onClick={this.props.toggleGraphTrue}>
                    User logs
                </button>
                <button className="ui button" onClick={this.props.toggleFood}>
                    Foods
                </button>
                
                <div className="right menu">
                    <button className="ui button" onClick={this.props.toggleEditTrue}>
                        Edit profile
                    </button>
                    <button className="ui button" onClick={this.props.logout}>
                    Logout
                    </button>
                </div>
            </div>)
    }
}