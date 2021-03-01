import React , { Component }  from 'react'
import axios from 'axios'
import Header from './Header'



export default class RandomBeer extends Component {
state = {
    beer: null,
    image: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: '',
    description: '',
    contributed_by: ''
}
 
componentDidMount() {
    this.getData();
  }


  getData = () => {
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response => {
            console.log(response)
            this.setState({
                beer:response.data,
                image: response.data.image_url,
                name: response.data.name,
                tagline: response.data.tagline,
                first_brewed: response.data.first_brewed,
                attenuation_level: response.data.attenuation_level,
                description: response.data.description,
                contributed_by: response.data.contributed_by
            })
        })
        .catch(err => {
            console.log(err.response)
        })
    }


    render() {
        return (
            <div>
            <Header />
                <img src={this.state.image} style={{'height':'200px'}} />
                <h1>{this.state.name}</h1>
                <h2>{this.state.tagline}</h2>
                <h2>{this.state.first_brewed}</h2>
                <h3>{this.state.attenuation_level}</h3>
                <p>{this.state.description}</p>
                <p>{this.state.contributed_by}</p>
            </div>
        )
    }
}