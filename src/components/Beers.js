import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header'

export default class Beers extends Component {

        state = {
            beers: []
        }

        componentDidMount() {
            this.getData();
        }

        getData = () => {
            axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
            console.log(response)
            this.setState({
                beers: response.data
            })
            })
            .catch(err => {
                console.log(err)
            })
        }
        render() {
        
        return (
            <div>
            <Header />
            {this.state.beers.map (beer => {
            return (
                <div key={beer._id}>
                    <img src={beer.image_url} style={{'height': '150px'}}></img>
                <h2>
                <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                </h2>
                <h3>{beer.tagline}</h3>
                <p>{beer.contributed_by}</p>
                </div>
            )})}

            </div>
        )

    }
}