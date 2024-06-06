import { Response } from "../../../shared/domain/response/Response";
import { AnimalRace } from "../domain/AnimalRace";

export interface AnimalRaceResponse extends Response
{
    data: AnimalRace[];
}