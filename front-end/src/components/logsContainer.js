import React, { Component } from 'react';


export default class LogsContainer extends Component {
    state= {
        lastLog: null
    }

    componentDidMount(){
        let token = localStorage.getItem("token")
        fetch("http://localhost:3000/logs", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.json())
        .then(data => {
            let lastLog = data[data.length - 1]
            this.setState({
                lastLog: lastLog
            })
        })
        .catch(e => console.error(e))
    }
    render(){
        return( <div className="card">
        <div className="content">
            <div className="header">Weight Progress </div>
            <div className="meta" />
            <div className="description">
                <p>Start Weight: {this.props.user.startingWeight}</p>
                {this.state.lastLog ? <p>Current Weight: {this.state.lastLog.weight}</p> : null}
                {this.state.lastLog ? <p>lbs til target weight: {Math.abs(this.state.lastLog.weight - this.props.user.goalWeight)}</p> : null }
            </div>
        </div>
    </div> )
    }
}