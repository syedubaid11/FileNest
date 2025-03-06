import { Injectable } from "@nestjs/common";
import { DrizzleD1Database } from "drizzle-orm/d1"; // Import the correct Drizzle instance
import { friendsTable } from "../db/schema"; // Import your friends table schema
import { and, eq } from "drizzle-orm";

@Injectable()
export class FriendsService {
  constructor(private readonly drizzle: DrizzleD1Database) {} // Use the correct type

  async sendFriendRequest(senderId: string, receiverId: string): Promise<string> {
    if (senderId===receiverId) {
      return "You cannot send a friend request to yourself";
    }
  
    await this.drizzle.insert(friendsTable).values({
      senderId,
      receiverId, 
      status: "pending",
    });

    return "Friend request sent successfully!";
  }

  async getFriend(userId:string){
    

    const get=await this.drizzle
    .select()
    .from(friendsTable)
    .where(
        and(eq(friendsTable.receiverId,userId))
    )

    if(!get){
        return 'user has no friend'
    }
  }
}
