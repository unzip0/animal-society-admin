import { AxiosResponse } from "axios";
import { Response } from "../../domain/response/Response";

export interface ApiResponse<response = Response> extends AxiosResponse {
    data: response;
}