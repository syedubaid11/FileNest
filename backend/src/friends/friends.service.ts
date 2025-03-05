import { Injectable } from "@nestjs/common";
import { DrizzleD1Database } from "drizzle-orm/d1"; // Import the correct Drizzle instance
import { friendsTable } from "../db/schema"; // Import your friends table schema

@Injectable()
export class FriendsService {
  constructor(private readonly drizzle: DrizzleD1Database) {} // Use the correct type

  async sendFriendRequest(userId: string, friendId: string): Promise<string> {
    if (userId===friendId) {
      return "You cannot send a friend request to yourself";
    }

    const existingUser=await this.drizzle
    .select(friendsTable)
    .from(friends)

    await this.drizzle.insert(friendsTable).values({
      userId,
      friendId, 
      status: "pending",
    });

    return "Friend request sent successfully!";
  }
}
