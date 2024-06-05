import axios from '../axios';
import HttpRoutes from './HttpRoutes';
import { Animal } from '../../../../management/animals/domain/Animal';

export const getAssociationAnimals = (): Promise<Animal[]> => {
    return axios.get(HttpRoutes.animals.getAssociationAnimals);
}
