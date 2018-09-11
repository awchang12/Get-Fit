import React, { Component } from 'react'

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
        this.state.foods.forEach(food => {totalCalories += food.calories})
        let caloricDifference = this.props.user.caloricGoal - totalCalories
        console.log(totalCalories)
        return( <div className="card">
        <div className="content">
            <div className="header">Daily Caloric Goal: {this.props.user.caloricGoal} calories</div>
            <div className="meta" />
            <div className="description">
            {this.state.foods.length !== 0 ? this.state.foods.map(food => <li key={food.id}>{food.name} - {food.calories} calories<button onClick={() => this.deleteFood(food.id)}>x</button></li>) : <h5>Go to the Foods tab to add foods!</h5>}
            {caloricDifference > 0 ? <h5>Calories left: {caloricDifference}</h5> : <h5>Calories Over: {Math.abs(caloricDifference)}</h5>}
            </div>
        </div>
    </div> )
    }
}