import { Controller } from "@nestjs/common";


@Controller('friends')
export class friendsController{
    constructor(private friendsService:FriendsService){}
}

