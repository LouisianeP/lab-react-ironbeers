import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';
import SingleBeer from './components/SingleBeer';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';

function App() {
  return (
    <>
  
    <Route exact path='/' component={Home} />
    <Route exact path='/beers' component={Beers}/>
    <Route exact path='/beers/:id' component={SingleBeer}/>
    <Route exact path='/new-beer' component={NewBeer}/>
    <Route exact path='/random-beer' component={RandomBeer}/>
    </>
  );
}

export default App;
