import axios from '../axios';
import HttpRoutes from './HttpRoutes';
import { Animal } from '../../../../management/animals/domain/Animal';
import { ApiResponse } from '../../response/ApiResponse';
import { AnimalRaceResponse } from '../../../../management/animalRaces/application/AnimalRaceResponse';
import { AnimalSpeciesResponse } from '../../../../management/animalSpecies/application/AnimalSpeciesResponse';

/**
 * 
 * @todo implement animal response
 */
export const getAssociationAnimals = (): Promise<Animal[]> => {
    return axios.get(HttpRoutes.animals.getAssociationAnimals);
}

export const getAllAnimalRaces = (): Promise<ApiResponse<AnimalRaceResponse>> => {
    return axios.get(HttpRoutes.animals.getAllAnimalRaces);
}

export const getAllAnimalSpecies = (): Promise<ApiResponse<AnimalSpeciesResponse>> => {
    return axios.get(HttpRoutes.animals.getAllAnimalSpecies);
}
