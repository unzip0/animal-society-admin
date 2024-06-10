import axios from '../axios';
import HttpRoutes from './HttpRoutes';
import { ApiResponse } from '../../response/ApiResponse';
import { AnimalRaceResponse } from '../../../../management/animalRaces/application/AnimalRaceResponse';
import { AnimalSpeciesResponse } from '../../../../management/animalSpecies/application/AnimalSpeciesResponse';
import { AnimalResponse } from '../../../../management/animals/application/AnimalResponse';
import { Animal } from '../../../../management/animals/domain/Animal';

export const getAssociationAnimals = (): Promise<ApiResponse<AnimalResponse>> => {
    return axios.get(HttpRoutes.animals.getAssociationAnimals);
}

export const getAllAnimalRaces = (): Promise<ApiResponse<AnimalRaceResponse>> => {
    return axios.get(HttpRoutes.animals.getAllAnimalRaces);
}

export const getAllAnimalSpecies = (): Promise<ApiResponse<AnimalSpeciesResponse>> => {
    return axios.get(HttpRoutes.animals.getAllAnimalSpecies);
}

export const createAnimal = (animal: Animal, file: File): Promise<ApiResponse> => {
    const data = {
        id: animal.getId(),
        name: animal.getName(),
        species_id: animal.getSpeciesId(),
        race_id: animal.getRaceId(),
        age: animal.getAge(),
    };
    const formData = new FormData();
    formData.append('id', data.id);
    formData.append('name', data.name);
    formData.append('species_id', data.species_id);
    formData.append('race_id', data.race_id);
    formData.append('age', data.age);
    formData.append('photo', file);
    return axios.post(HttpRoutes.animals.createAnimal, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
