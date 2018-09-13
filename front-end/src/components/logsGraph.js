import React, { Component } from 'react'

import { Line } from '@nivo/line'
import LogForm from './addLogForm'
import { Button } from 'semantic-ui-react'

export default class LogsGraph extends Component {
    state= {
        addLog: false,
        logs: [{color: 'hsl(288, 70%, 50%)',x: "2018-6-04",y: this.props.user.startingWeight}]
    }
    componentDidMount(){
        console.log("hello")
        let token = localStorage.getItem("token")
        fetch("http://localhost:3000/logs", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            let logInfo=[]
            data.map(log => 
                logInfo.push({color: 'hsl(288, 70%, 50%)', x: log.date, y: log.weight}))
            this.setState({
                logs: [...this.state.logs, ...logInfo]
            })
        })
        .catch(e => console.error(e))
    }

    onClick = () => {
        this.setState({
            addLog: !this.state.addLog
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        console.log(event.currentTarget.date.value)
        let newDate=event.currentTarget.date.value.split("/")
        let year = newDate.pop()
        newDate.unshift(year)
        newDate = newDate.join('-')
        console.log(newDate)

        let data = {
                date: newDate,
                weight: event.currentTarget.weight.value,
                user_id: this.props.user.id
        }
        const token = localStorage.getItem("token")
        fetch('http://localhost:3000/logs',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => {
            let dataInfo = [{color: 'hsl(288, 70%, 50%)', x: data.date, y: data.weight}]
            this.setState({
                logs: [...this.state.logs, ...dataInfo],
                addLog: false
            })
        })
    }

    render(){
        let sorted = this.state.logs.sort(function (a, b) {
            var key1 = new Date(a.x);
            var key2 = new Date(b.x);
        
            if (key1 < key2) {
                return -1;
            } else if (key1 === key2) {
                return 0;
            } else {
                return 1;
            }
        })
        return(<React.Fragment>{this.state.addLog ? <LogForm onSubmit={this.onSubmit} user={this.props.user} toggle={this.onClick}/> : <React.Fragment><Button basic color="teal" onClick={this.onClick}>Add Log</Button>
                <Line
                  width={900}
                  height={400}
                  margin={{
                    top: 20,
                    right: 30,
                    bottom: 20,
                    left: 30
                }}
                  data={[
                    {id: 'Logs',color: 'hsla(183, 100%, 35%, 1)',data: sorted}
                ]}
                />
            </React.Fragment>}
        </React.Fragment>
            
    )
    }
}
