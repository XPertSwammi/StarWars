import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from "../../services/swapi-service";
import {SwapiServiceProvider} from '../swapiService-context';
import {PeoplePage, PlanetPage, StarshipPage} from '../pages';
import {StarshipDetails} from '../sw-components';

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {


    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <BrowserRouter>
              <Header />
              <RandomPlanet/>
              <Route path='/people/:id?' component={PeoplePage}/>
              <Route path='/planets/:id?' component={PlanetPage}/>
              <Route path='/starships' exact component={StarshipPage} />
              <Route path='/starships/:id' render={({match})=>{
                  const {id} = match.params;
                  return <StarshipDetails itemId={id}/>
              }}/>
            </BrowserRouter>
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
