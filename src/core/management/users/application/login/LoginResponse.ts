import { User } from "@/core/management/users/domain/User";
import { UserToken } from "@/core/management/users/domain/UserToken";
import { Response } from "../../../../shared/domain/response/Response";

export interface LoginResponse extends Response
{
    data: {
        user: User;
        access_token: UserToken;
    }
}