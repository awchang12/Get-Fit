import React, { Component } from 'react'
import FoodCard from './foodCard'
import {Card} from 'semantic-ui-react'

export default class Food extends Component {
    state={
        searchTerm: "",
        currentItems: []
    }
    onSearch = event => {
        console.log("in search")
        if(this.state.searchTerm === "") {
            alert("please type in a food item")
        } else {
            let apiId="75fb2595"
        let apiKey="ab7137242598380fe9d8d2dfca2d5962"
        let url="https://api.nutritionix.com/v1_1/search/"
        fetch(url + `${this.state.searchTerm}?results=0:30&fields=item_name,brand_name,item_id,nf_calories&appId=${apiId}&appKey=${apiKey}`)
        .then(res => res.json())
        .then(data => {

            this.setState({
                currentItems: data.hits,
                searchTerm: ""
            })
        })
        }
        
    }

    onChange= event => {
        event.preventDefault()
        this.setState({
            searchTerm: event.target.value
        }) 
    }

    render(){
        return(<React.Fragment>
            <div className="ui container">
                <div className="ui icon input">
                    <div className="ui search">
                        <input className="prompt" type="text" onChange={this.onChange} placeholder="Search..."/>
                        <i className="search icon" onClick={this.onSearch}></i>
                    </div> 
                </div>
                {this.state.currentItems.length === 0 ? <div className="ui container"><h3>Search For Some Foods!</h3></div> : null }
            </div>
            <Card.Group centered>
                {this.state.currentItems.map(item => <FoodCard key={item.fields.item_id} item={item}/>) }
                </Card.Group>
          
        </React.Fragment>)
    }
}