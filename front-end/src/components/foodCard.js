import React, { Component } from 'react'

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
        
    }

    render(){
        return(<React.Fragment>{this.state.toggleInfo ? 
        <div className="card" >
            <h3>{this.props.item.fields.item_name} - {this.props.item.fields.nf_calories} calories</h3>
            <p>Protein: {this.state.moreInfo.nf_protein}g</p>
            <p>Carbohydrates: {this.state.moreInfo.nf_total_carbohydrate}g</p>
            <p>Fats: {this.state.moreInfo.nf_total_fat}g</p>
            <button className="ui button" onClick={event => this.onChangeBack()}>less Info</button>
            <button className="ui button" onClick={event => this.onChangeBack()}>less Info</button>
        </div>
        : <div className="card" ><h3>{this.props.item.fields.item_name} - {this.props.item.fields.nf_calories} calories</h3><button className="ui button" onClick={event => this.onClick()}>more info?</button></div>}
        </React.Fragment>)
    }
}