import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'


export default class Navbar extends Component {

    
    render(){
        let activeItem = this.props.activeItem
        return(
            <Menu secondary>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.props.toggleEditFalse} />
            <Menu.Item
              name='user logs'
              active={activeItem === 'logs'}
              onClick={this.props.toggleGraphTrue}
            />
            <Menu.Item
              name='foods'
              active={activeItem === 'foods'}
              onClick={this.props.toggleFood}
            />
            <Menu.Menu position='right'>
              <Menu.Item
                name='edit profile'
                active={activeItem === 'edit'}
                onClick={this.props.toggleEditTrue}
              />
              <Menu.Item
                name='logout'
                onClick={this.props.logout}
              />
            </Menu.Menu>
          </Menu>

            )
    }
}

