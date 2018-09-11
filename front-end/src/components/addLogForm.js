import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css';

export default class LogForm extends Component {
    state={
        date: moment()
    }

    handleChange = (date) => {
        console.log(date)
        this.setState({
          date: date
        });
      }

    
    
    render() {
        return(<div className="ui container">
        <button className="ui button" onClick={this.props.toggle}>back to Logs</button>
        <form className="ui small form" onSubmit={event => this.props.onSubmit(event)}>
            <div className="fields">
                <div className="field">
                <label>Choose Date</label>
                    <DatePicker onChange={this.handleChange} name="date" maxDate={new Date()} selected={this.state.date}/>
                </div>
                <div className="field">
                    <label>Current Weight</label>
                    <input type="number" name="weight" placeholder="weight"/>
                </div>
            </div>

            <button className="ui button" type="submit">Submit</button>
        </form>
    </div>)
    }
}