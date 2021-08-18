import React from 'react';
import ItemDetails, { Record } from '../item-details';
import {withDataDetail} from '../../components/hoc-helpers';
import {withSwapiService} from '../../components/hoc-helpers';

const fieldsForPerson = [
  <Record field="gender" label="Gender" />,
  <Record field="eyeColor" label="Eye Color" />
]
const fieldsForPlanet = [
  <Record field="population" label="Population" />,
  <Record field="rotationPeriod" label="Rotation Period" />,
  <Record field="diameter" label="Diameter" />
]
const fieldsForStarship = [
  <Record field="model" label="Model" />,
  <Record field="length" label="Length" />,
  <Record field="costInCredits" label="Cost" />
]
const mapToPropsForPerson = (swapiService) =>  {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
}
const mapToPropsForPlanet = (swapiService) =>  {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}
const mapToPropsForStarship = (swapiService) =>  {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
}
const PersonDetails = withSwapiService(withDataDetail( ItemDetails,  fieldsForPerson ), mapToPropsForPerson);


const PlanetDetails = withSwapiService(withDataDetail( ItemDetails,  fieldsForPlanet ), mapToPropsForPlanet);


const StarshipDetails = withSwapiService(withDataDetail( ItemDetails,  fieldsForStarship), mapToPropsForStarship);


export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};
