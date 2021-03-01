import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
        <img src={beers}/>
          <Link to="/beers">All Beers</Link>
        </div>
        <div>
        <img src={randomBeer}/>
          <Link to="/random-beer">Random Beer</Link>
        </div>
        <div>
        <img src={newBeer}/>
          <Link to="/new-beer">New Beer</Link>
        </div>
      </div>
    );
  }
}
