import React, { Component } from 'react'

import { Card, Button, List } from 'semantic-ui-react'

export default class FoodContainer extends Component {

    state={
        foods: []
    }

    componentDidMount(){
        let token = localStorage.getItem("token")
        fetch("http://localhost:3000/foods", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.json())
        .then(data => {
            this.setState({
                foods: data
            })
        })
        .catch(e => console.error(e))
    }

    deleteFood = (id) => {
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/foods/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
            foods: data
        })})
    }

    render(){
        let totalCalories = 0
        let totalFats = 0
        let totalCarbs = 0
        let totalProtein = 0
        this.state.foods.forEach(food => {
            totalCalories += food.calories
            totalFats += food.fats
            totalCarbs += food.carbs
            totalProtein += food.protein
        })
        let caloricDifference = this.props.user.caloricGoal - totalCalories
        console.log(totalCalories)
        return( 
          <Card>
            <Card.Content>
              <Card.Header>Track your Calories!</Card.Header>
              <Card.Meta></Card.Meta>
              <Card.Description>
              <h5>Daily Caloric Goal: {this.props.user.caloricGoal} calories</h5>
              {this.state.foods.length !== 0 ? 
              <List>
              {this.state.foods.map(food => 
              <List.Item>
              <List.Content>
                <List.Header ></List.Header>
                <List.Description >{food.name} - {food.calories} calories<button onClick={() => this.deleteFood(food.id)}>x</button></List.Description>
              </List.Content>
                </List.Item>
              )}</List> : <h5>Go to the Foods tab to add foods!</h5>}
            {caloricDifference > 0 ? <h5>Calories left: {caloricDifference}</h5> : <h5>Calories Over: {Math.abs(caloricDifference)}</h5>}
            
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <h5>Total Macronutrients Consumed: </h5>
                <p>Protein - {totalProtein}g</p>  
                <p>Carbs - {totalCarbs}g</p>  
                <p>Fats - {totalFats}g</p>
            </Card.Content>
          </Card>
    )
    }
}