"use server";

import { revalidatePath } from "next/cache";

import { databases } from "../database/config";
import { DB_NAME, USER_COLLECTION } from "../database/name";
import { ID, Query } from "node-appwrite";
import { handleError } from "@/lib/utils";

// CREATE
export async function createUserAppwrite(id:string,user: CreateUserParams) {
  try {
    const newUser = await databases.createDocument(
      DB_NAME,
      USER_COLLECTION,
      ID.unique(),
      user
    );

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

// READ
export async function getUserByIdAppwrite(userId: string) {
  try {
    const user = await databases.listDocuments(DB_NAME, USER_COLLECTION, [
      Query.equal("clerkId", userId),
    ]);

    if (!user.documents[0]) throw new Error("User not found by Reading Appwrite");

    return JSON.parse(JSON.stringify(user.documents[0]));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateUserAppwrite(clerkId: string, user: UpdateUserParams) {
  try {
    const usr = await databases.listDocuments(DB_NAME, USER_COLLECTION, [
      Query.equal("clerkId", clerkId),
    ]);

    const updatedUser = await databases.updateDocument(
      DB_NAME,
      USER_COLLECTION,
      usr.documents[0].$id,
      user
    );

    if (!updatedUser) throw new Error("User update failed Appwrite");

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteUserAppwrite(clerkId: string) {
  try {
    // Find user to delete
    const userToDelete = await databases.listDocuments(
      DB_NAME,
      USER_COLLECTION,
      [Query.equal("clerkId", clerkId)]
    );

    if (!userToDelete.documents[0]) {
      throw new Error("User not found Appwrite");
    }

    // Delete user
    const deletedUser = await databases.deleteDocument(
      DB_NAME,
      USER_COLLECTION,
      userToDelete.documents[0].$id
    );
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

// USE CREDITS
export async function updateCreditsAppwrite(userId: string, creditFee: number) {
  try {
    const usr = await databases.getDocument(DB_NAME, USER_COLLECTION, userId);

    const updatedUserCredits = await databases.updateDocument(
      DB_NAME,
      USER_COLLECTION,
      userId,
      {
        creditBalance: usr.creditBalance + creditFee,
      }
    );

    if (!updatedUserCredits) throw new Error("User credits update failed Appwrite");

    return JSON.parse(JSON.stringify(updatedUserCredits));
  } catch (error) {
    handleError(error);
  }
}
