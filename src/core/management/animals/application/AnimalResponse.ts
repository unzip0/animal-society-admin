import { Response } from "../../../shared/domain/response/Response";
import { Animal } from "../domain/Animal";

export interface AnimalResponse extends Response
{
    data: Animal[];
}