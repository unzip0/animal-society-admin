const API_BASE_URL = import.meta.env.VITE_API_URL;

const httpRoutes = {
  auth: {
    login: `${API_BASE_URL}/users/login`,
    register: `${API_BASE_URL}/users/register`,
    logout: `${API_BASE_URL}/users/logout`,
  },
  users: {
    update: (id: string) => `${API_BASE_URL}/users/${id}`,
  },
  animals: {
    getAssociationAnimals: `${API_BASE_URL}/animals/search/all`,
    getAllAnimalRaces: `${API_BASE_URL}/animals/races/all`,
    getAllAnimalSpecies: `${API_BASE_URL}/animals/species/all`,
    createAnimal: `${API_BASE_URL}/animals/create`,
  }
};

export default httpRoutes;