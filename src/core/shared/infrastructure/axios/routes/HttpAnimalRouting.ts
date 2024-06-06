import axios from '../axios';
import HttpRoutes from './HttpRoutes';
import { ApiResponse } from '../../response/ApiResponse';
import { AnimalRaceResponse } from '../../../../management/animalRaces/application/AnimalRaceResponse';
import { AnimalSpeciesResponse } from '../../../../management/animalSpecies/application/AnimalSpeciesResponse';
import { AnimalResponse } from '../../../../management/animals/application/AnimalResponse';

export const getAssociationAnimals = (): Promise<ApiResponse<AnimalResponse>> => {
    return axios.get(HttpRoutes.animals.getAssociationAnimals);
}

export const getAllAnimalRaces = (): Promise<ApiResponse<AnimalRaceResponse>> => {
    return axios.get(HttpRoutes.animals.getAllAnimalRaces);
}

export const getAllAnimalSpecies = (): Promise<ApiResponse<AnimalSpeciesResponse>> => {
    return axios.get(HttpRoutes.animals.getAllAnimalSpecies);
}
