import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService} from '../hoc-helpers';




const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  };
};
const mapToPropsPerson = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  }
}
const mapToPropsPlanet = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  }
}
const mapToPropsStarship = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  }
}
const renderName = ({ name }) => <span>{name}</span>;

const PersonList = withSwapiService(withData(
  withChildFunction(ItemList, renderName)), mapToPropsPerson); 

const PlanetList = withSwapiService(withData(
  withChildFunction(ItemList, renderName)), mapToPropsPlanet);

const StarshipList = withSwapiService(withData(
  withChildFunction(ItemList, renderName)), mapToPropsStarship);

export {
  PersonList,
  PlanetList,
  StarshipList
};
