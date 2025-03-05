import { Controller, Post , Body, Get, Param  } from "@nestjs/common";
import { FriendsService } from "./friends.service";


@Controller('friends')
export class friendsController{
    constructor(private friendsService:FriendsService){}

    @Post("send")
    async sendFriendRequest(@Body() body:{senderId:string;receiverId:string }){
        return this.friendsService.sendFriendRequest(body.senderId,body.receiverId)
    }

    @Get("get/:userid")
    async getFriends(@Param("userId") userId:string){
        return this.friendsService.getFriend(userId)
    }

    
}

