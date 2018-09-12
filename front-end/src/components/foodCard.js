import React, { Component } from 'react'

import { Card, Button} from 'semantic-ui-react'

export default class FoodCard extends Component {
    state={
        toggleInfo: false,
        moreInfo: null
    }

    onClick = () => {
        let url=`https://api.nutritionix.com/v1_1/item?id=${this.props.item.fields.item_id}&appId=75fb2595&appKey=ab7137242598380fe9d8d2dfca2d5962`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            this.setState({
                toggleInfo: true,
                moreInfo: data
            })
        })
    }

    onChangeBack = () => {
        this.setState({
            toggleInfo: false,
            moreInfo: null
        })
    }

    addFood = () => {
        const data={
            name: this.state.moreInfo.item_name,
            fats: this.state.moreInfo.nf_total_fat,
            carbs: this.state.moreInfo.nf_total_carbohydrate,
            protein: this.state.moreInfo.nf_protein,
            calories: this.state.moreInfo.nf_calories
        }
        console.log(data)
        const token = localStorage.getItem("token")
        
        fetch("http://localhost:3000/foods", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => {
            alert("Food Item has been added!")
        })
    }

    render(){
        return(<React.Fragment>{this.state.toggleInfo ? 
        <Card>
      <Card.Content>
        <Card.Header>{this.props.item.fields.item_name}</Card.Header>
        <Card.Meta>{this.props.item.fields.nf_calories} calories</Card.Meta>
        <Card.Description>
          <p>Protein: {this.state.moreInfo.nf_protein}g</p>
          <p>Carbohydrates: {this.state.moreInfo.nf_total_carbohydrate}g</p>
          <p>Fats: {this.state.moreInfo.nf_total_fat}g</p>
        </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        <Button basic color='green' onClick={event => this.addFood()}>
          Add
        </Button>
        <Button basic color='red' onClick={event => this.onChangeBack()}>
          less info
        </Button>
      </div>
    </Card.Content>
  </Card>
        : 
    <Card>
      <Card.Content>
        <Card.Header>{this.props.item.fields.item_name}</Card.Header>
        <Card.Meta>{this.props.item.fields.nf_calories} calories</Card.Meta>
        <Card.Description>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          <Button basic color='teal' onClick={event => this.onClick()}>
            Macronutrients
          </Button>
      </Card.Content>
    </Card>
        }
        </React.Fragment>)
    }
}