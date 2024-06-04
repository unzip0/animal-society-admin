import axios from '../axios';
import HttpRoutes from './HttpRoutes';

export const getAssociationAnimals = () => {
    return axios.get(HttpRoutes.animals.getAssociationAnimals);
}
