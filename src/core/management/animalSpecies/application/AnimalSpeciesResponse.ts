import { Response } from "../../../shared/domain/response/Response";
import { AnimalSpecies } from "../domain/AnimalSpecies";

export interface AnimalSpeciesResponse extends Response
{
    data: AnimalSpecies[];
}