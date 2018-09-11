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

            let orderedLogs = data.sort(function (a, b) {
                var key1 = new Date(a.date);
                var key2 = new Date(b.date);
            
                if (key1 < key2) {
                    return -1;
                } else if (key1 === key2) {
                    return 0;
                } else {
                    return 1;
                }
            })
            let lastLog = orderedLogs[orderedLogs.length - 1]
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
                <p>Goal Weight: {this.props.user.goalWeight}</p>
                {this.state.lastLog ? <p>Current Weight: {this.state.lastLog.weight}</p> : null}
                {this.state.lastLog ? <p>lbs til target weight: {Math.abs(this.state.lastLog.weight - this.props.user.goalWeight)}</p> : null }
            </div>
        </div>
    </div> )
    }
}