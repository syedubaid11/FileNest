import { Controller } from "@nestjs/common";


@Controller('friends')
exporet class friendsController{
    constructor(private friendsService:FriendsService){}
}

