import { Injectable } from "@nestjs/common";
import { DrizzleConfig } from "drizzle-orm";

@Injectable();
export class FriendsService{
    constructor(private drizzle:DrizzleConfig){}
    async sendFriendRequest(senderid:string,receiverid:string):Promise<string>{
        if(senderid==receiverid){
            return 'You cannot send a friend req to yourself'
        }
        return this.drizzle.create({
            data:{senderid,receiverid,status:'pending'},
        })
        }
}