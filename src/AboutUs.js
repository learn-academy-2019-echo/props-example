import React, { Component } from 'react'

class AboutUs extends Component {
   
    render(){
        return(
            <div>
                <h1>Name: {this.props.name}</h1>
                <h3>Favorite Class: {this.props.favoriteLearnClass}</h3>
            </div>
        )
    }
}

export default AboutUs